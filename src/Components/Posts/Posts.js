import React from "react";

import styled from "styled-components";

const PostsWrap = styled.div`
  display: flex;
  flex-direction: row;

  .single-post {
    width: 33.33%;
    text-align: center;

    :hover {
      background-color: #496f8c;
      color: #fff;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
`;

const Posts = props => {
  return (
    <PostsWrap>
      <div className="single-post card-style">
        <h4>Title 1</h4>
        <h5>Author</h5>
      </div>
      <div className="single-post card-style">
        <h4>Title 2</h4>
        <h5>Author</h5>
      </div>
      <div className="single-post card-style">
        <h4>Title 3</h4>
        <h5>Author</h5>
      </div>
    </PostsWrap>
  );
};

export default Posts;
