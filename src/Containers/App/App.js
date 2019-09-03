import React, { Component } from "react";
import Axios from "axios";

import styled from "styled-components";

import "../../assets/css/common.css";

import Posts from "../../Components/Posts/Posts";
import FullPost from "../../Components/FullPost/FullPost";
import CreatePosts from "../../Components/CreatePosts/CreatePosts";

const MainWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  color: rgb(68, 107, 138);
`;

class App extends Component {
  state = {
    data: null,
    post: null
  };

  componentDidMount() {
    Axios.get("https://reqres.in/api/users", {
      params: {
        page: 1
      }
    })
      .then(response => {
        // console.log(" [response] ", response);

        if (response.status === 200) {
          setTimeout(() => {
            this.setState({ data: response.data });
          }, 3000);
        }
      })
      .catch(error => {
        // console.log(" [error] ", error);
      });
  }

  fnPostClick = id => {
    Axios.get("https://reqres.in/api/users", {
      params: {
        id
      }
    })
      .then(response => {
        // console.log(" [fnPostClick > response] ", response);

        if (response.status === 200) {
          this.setState({ post: response.data.data });
        }
      })
      .catch(error => {
        // console.log(" [error] ", error);
      });
  };

  render() {
    return (
      <MainWrapper>
        <Posts data={this.state.data} eventPostClick={this.fnPostClick} />
        <FullPost post={this.state.post} />
        <CreatePosts />
      </MainWrapper>
    );
  }
}

export default App;
