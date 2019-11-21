import React, { Component } from "react";
import "./App.css";

import Textarea from '../FormElements/Textarea';
import Select from '../FormElements/Select';

class App extends Component {
  state = {
    form: {
      textbox: "",
      textarea: "",
      checkbox: "beginner",
      radio: "male",
      select: "option1"
    },
    selectOptions: [
      { value: 'option1', name: 'Option 1' },
      { value: 'option2', name: 'Option 2' },
      { value: 'option3', name: 'Option 3' },
      { value: 'option4', name: 'Option 4' },
    ]
  };

  onChangeCB = (event, name) => {
    console.log("[value]", event.target.value);
    console.log("[name]", name);

    let updatedForm = { ...this.state };

    switch (name) {
      case "TEXTBOX":
        updatedForm.textbox = event.target.value;
        break;

      case "TEXTAREA":
        updatedForm.textarea = event.target.value;
        break;

      default:
        break;
    }

    this.setState({ form: updatedForm });
  };

  onFormSubmitCB = function(event) {
    event.preventDefault();

    console.log(event);
  };

  render() {
    return (
      <div className="form-wrap">
        <form action="#" method="POST" onSubmit={this.onFormSubmitCB}>
          <div className="frm-group">
            <label htmlFor="">Textbox : {this.state.form.textbox}</label>
            <input
              type="text"
              className="inp-txt"
              value={this.state.textbox}
              onChange={event => this.onChangeCB(event, "TEXTBOX")}
            />
          </div>

          <div className="frm-group">
            <label htmlFor="">Textarea: {this.state.form.textarea}</label>
            <Textarea name="textarea" id="textarea" onChangeCB={this.onChangeCB} className="inp-textarea" />
          </div>

          <div className="frm-group">
            <label htmlFor="">Checkbox</label>
            <div className="inp-chk-wrap">
              <label htmlFor="">
                <input
                  type="checkbox"
                  name="level"
                  id=""
                  value="beginner"
                  defaultChecked={true}
                />
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
                <input
                  type="checkbox"
                  name="level"
                  id=""
                  value="advanced"
                />
                Advanced
              </label>
            </div>
          </div>

          <div className="frm-group">
            <label htmlFor="">Radio</label>
            <div className="inp-rdo-wrap">
              <label htmlFor="">
                <input type="radio" name="gender" value="male" defaultChecked="true" />
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
            <Select id="select" name="select" options={this.state.selectOptions} value="option3" onChangeCB={this.onChangeCB} />
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
