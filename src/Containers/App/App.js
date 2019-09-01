import React, { Component } from "react";

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
  state = {};

  render() {
    return (
      <MainWrapper>
        <Posts />
        <FullPost />
        <CreatePosts />
      </MainWrapper>
    );
  }
}

export default App;
