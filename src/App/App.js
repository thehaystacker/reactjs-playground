import React, { Component } from "react";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="form-wrap">
        <form action="#" method="POST">
          <div className="frm-group">
            <label htmlFor="">Textbox</label>
            <input type="text" className="inp-txt" />
          </div>

          <div className="frm-group">
            <label htmlFor="">Textarea</label>
            <textarea name="" id="" className="inp-textarea"></textarea>
          </div>

          <div className="frm-group">
            <label htmlFor="">Checkbox</label>
            <div className="inp-chk-wrap">
              <label htmlFor="">
                <input type="checkbox" name="level" id="" value="beginner" />
                Beginner
              </label>
            </div>
            <div className="inp-chk-wrap">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="level"
                  id=""
                  value="intermediate"
                />
                Intermediate
              </label>
            </div>
            <div className="inp-chk-wrap">
              <label htmlFor="">
                <input type="checkbox" name="level" id="" value="advanced" />
                Advanced
              </label>
            </div>
          </div>

          <div className="frm-group">
            <label htmlFor="">Radio</label>
            <div className="inp-rdo-wrap">
              <label htmlFor="">
                <input type="radio" name="gender" value="male" />
                Male
              </label>
            </div>
            <div className="inp-rdo-wrap">
              <label htmlFor="">
                <input type="radio" name="gender" value="female" />
                Female
              </label>
            </div>
          </div>

          <div className="frm-group">
            <label htmlFor="">Textbox</label>
            <select name="options" id="">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="frm-btn-grp">
            <button type="submit" className="frm-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
