import React, { Component } from "react";
import "./Counter.css";
import { connect } from "react-redux";
import axios from "axios";

import * as Actions from "../../Store/Actions/Actions";

class Counter extends Component {
  render() {
    let resultsUl = null;
    if (this.props.results && this.props.results.length) {
      resultsUl = this.props.results.map((item, i) => {
        return (
          <li key={i} onClick={() => this.props.cbDeleteResult(i)}>
            {item}
          </li>
        );
      });
    }

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
        <p className="txt-counter">{this.props.counter}</p>
        <div className="action-btns">
          <button
            className="btn-actions"
            onClick={this.props.cbIncrementCounter}
          >
            Increment
          </button>

          <button className="btn-actions" onClick={this.props.cbAddCounter}>
            Add {this.props.btnAddCount}
          </button>

          <button
            className="btn-actions"
            onClick={this.props.cbDecrementCounter}
          >
            Decrement
          </button>

          <button
            className="btn-actions"
            onClick={this.props.cbSubtractCounter}
          >
            Subtract {this.props.btnSubtractCount}
          </button>
        </div>

        <div className="action-btns">
          <button
            className="btn-actions"
            onClick={() => this.props.cbStoreResult(this.props.counter)}
          >
            Store Result
          </button>
        </div>

        <div className="results">
          <ul>{resultsUl}</ul>
        </div>

        <div className="anime-cards-wrap">{animeCards}</div>
      </div>
    );
  }

  componentDidMount = () => {
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
    counter: state.counter.counter,
    btnAddCount: state.counter.btnAddCount,
    btnSubtractCount: state.counter.btnSubtractCount,
    results: state.results.results,
    animeChars: state.counter.animeChars
  };
};

const mapDispatchToAction = dispatch => {
  return {
    cbIncrementCounter: () => dispatch(Actions.increment()),
    cbAddCounter: () => dispatch(Actions.add()),
    cbDecrementCounter: () => dispatch(Actions.decrement()),
    cbSubtractCounter: () => dispatch(Actions.subtract()),
    cbStoreResult: counter => dispatch(Actions.storeResult(counter)),
    cbDeleteResult: idx => dispatch(Actions.deleteResult(idx)),
    cbSaveAnimeChars: response => dispatch(Actions.saveAnimeChars(response))
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(Counter);
