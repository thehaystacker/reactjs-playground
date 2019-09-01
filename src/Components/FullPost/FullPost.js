import React from "react";

import styled from "styled-components";

const FullPostsWrapper = styled.div`
  text-align: center;
`;

const FullPosts = props => {
  return (
    <FullPostsWrapper className="card-style">
      <h4>Title</h4>
      <h5>Author</h5>
      <p>Content</p>
    </FullPostsWrapper>
  );
};

export default FullPosts;
