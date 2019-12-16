import React, { Component } from "react";
import "./Counter.css";
import { connect } from "react-redux";
import axios from "axios";

import * as Actions from "../../Store/Actions/Actions";

class Counter extends Component {
  render() {

    let cardPlaceholders = [];
    for (let i = 0; i < 8; i++) {
      cardPlaceholders.push(
        <div className="card" key={i}>
          <div className="card-box">
            <div
              className="plch-box"
              style={{ width: "100%", height: "70%" }}
            ></div>
            <div className="card-meta">
              <div
                className="plch-box"
                style={{ width: "70%", height: "20px", marginBottom: "10px" }}
              ></div>
              <div
                className="plch-box"
                style={{ width: "40%", height: "10px" }}
              ></div>
            </div>
          </div>
        </div>
      );
    }

    let animeCards = <div className="plch-card">{cardPlaceholders}</div>;

    if (this.props.animeChars) {
      animeCards = (
        <div className="plch-card">
          {this.props.animeChars.map((anime, i) => {
            return (
              <div className="card" key={anime.mal_id}>
                <div className="card-box">
                  <div
                    className="card-img"
                    style={{ backgroundImage: `url(${anime.image_url})` }}
                  ></div>
                  <div className="card-meta">
                    <p className="title">{anime.title}</p>
                    <p className="type">{anime.type}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="counter">
        <div className="anime-cards-wrap">{animeCards}</div>
      </div>
    );
  }

  componentDidMount = () => {
    return;
    
    axios
      .get("https://api.jikan.moe/v3/search/anime?q=pokemon&limit=16")
      .then(response => {
        console.log("[response]", response);

        if (response.status === 200) {
          let { results } = response.data;

          console.log("[results]", results);

          if (results && results.length) {
            this.props.cbSaveAnimeChars(results);
          }
        }
      })
      .catch(error => {
        console.log("[error]", error);
      });
  };
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToAction = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(Counter);
