import React from "react";

import styled from "styled-components";

const PostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .single-post {
    text-align: center;
    width: 30%;

    :hover {
      background-color: #496f8c;
      color: #fff;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
`;

const PlaceholderWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  .card-style.placeholder {
    height: 120px;
    animation-duration: 2s;
    animation-name: glow;
    animation-iteration-count: infinite;
  }

  @keyframes glow {
    0% {
      background-color: rgb(255, 255, 255);
    }

    50% {
      background-color: rgba(161, 181, 197, 0.2);
    }

    100% {
      background-color: rgb(255, 255, 255);
    }
  }
`;

const Posts = props => {
  let posts = (
    <PlaceholderWrap>
      <div className="single-post card-style placeholder" />
      <div className="single-post card-style placeholder" />
      <div className="single-post card-style placeholder" />
      <div className="single-post card-style placeholder" />
      <div className="single-post card-style placeholder" />
      <div className="single-post card-style placeholder" />
    </PlaceholderWrap>
  );

  if (props.data) {
    posts = props.data.data.map(post => {
      return (
        <div className="single-post card-style" key={post.id} onClick={() => props.eventPostClick(post.id)}>
          <h4>{post.first_name + " " + post.last_name}</h4>
          <h5>{post.email}</h5>
        </div>
      );
    });
  }

  return <PostsWrap>{posts}</PostsWrap>;
};

export default Posts;
