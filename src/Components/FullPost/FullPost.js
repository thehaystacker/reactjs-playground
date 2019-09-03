import React from "react";

import styled from "styled-components";

const FullPostsWrapper = styled.div`
  text-align: center;
`;

const FullPosts = props => {
  console.log(" [props.post] ", props.post);

  let post = (
    <p>Please select a post to see details.</p>
  );

  if (props.post) {
    post = (
      <div className="full-post">
        <h4>{props.post.first_name + " " + props.post.last_name}</h4>
        <h5>{props.post.email}</h5>
        <p>{props.post.avatar}</p>
        <img src={props.post.avatar} alt="avatar" />
      </div>
    );
  }

  return <FullPostsWrapper className="card-style">{post}</FullPostsWrapper>;
};

export default FullPosts;
