import React from "react";

import styled from "styled-components";

const PostTitle = styled.h4`
  text-align: center;
`;

const CreateForm = styled.div`
  width: 60%;
  margin: 0 auto;

  label {
    display: block;
    display: block;
    font-weight: 600;
    font-size: 11px;
    margin: 5px 0;
  }

  .inp-form {
    border: 1px solid #446b8a;
    width: 100%;
    border-radius: 0;
    outline: none;
  }

  .inp-txt {
    height: 30px;
  }

  .inp-txtarea {
    resize: none;
  }

  .btn-submit {
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const CreatePosts = props => {
  return (
    <div className="card-style">
      <PostTitle>Creat New Post</PostTitle>

      <CreateForm>
        <form>
          <div>
            <label>Title</label>
            <input type="text" className="inp-form inp-txt" />
          </div>

          <div>
            <label>Content</label>
            <textarea className="inp-form inp-txtarea" rows="6" />
          </div>

          <div>
            <label>Author</label>
            <select className="inp-form inp-select">
              <option>Sangeeth</option>
              <option>Sarath</option>
            </select>
          </div>

          <ButtonWrapper>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </ButtonWrapper>
        </form>
      </CreateForm>
    </div>
  );
};

export default CreatePosts;
