import React from "react";

const CreatePosts = props => {
  return (
    <div className="card-style">
      <h4>Creat New Post</h4>

      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>

        <div>
          <label>Content</label>
          <textarea></textarea>
        </div>

        <div>
          <label>Author</label>
          <select>
            <option>Sangeeth</option>
            <option>Sarath</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePosts;
