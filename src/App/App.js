import React, { Component } from "react";
import "./App.css";

import Text from "../FormElements/Text";
import Textarea from "../FormElements/Textarea";
import Select from "../FormElements/Select";
import Checkbox from "../FormElements/Checkbox";
import Radio from "../FormElements/Radio";

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
      { value: "option1", name: "Option 1" },
      { value: "option2", name: "Option 2" },
      { value: "option3", name: "Option 3" },
      { value: "option4", name: "Option 4" }
    ],
    checkboxes: [
      {name: 'beginner', value: 'Beginner'},
      {name: 'intermediate', value: 'Intermediate'},
      {name: 'advanced', value: 'Advanced'},
    ]
  };

  onChangeCB = (event, name) => {
    // console.log("[value]", event.target.value);
    // console.log("[name]", name);

    let form = { ...this.state.form };

    console.log(" [form] ", form);

    switch (name) {
      case "TEXTBOX":
        form.textbox = event.target.value;
        break;

      case "TEXTAREA":
        form.textarea = event.target.value;
        break;

      default:
        break;
    }

    this.setState({ form });
  };

  onFormSubmitCB = event => {
    event.preventDefault();

    console.log("[form]", this.state.form);
  };

  render() {
    return (
      <div className="form-wrap">
        <form action="#" method="POST" onSubmit={this.onFormSubmitCB}>
          <Text
            label="Textbox"
            placeholder="Textbox"
            className="inp-txt"
            value={this.state.textbox}
            onChangeCB={this.onChangeCB}
          />

          <Textarea
            label="Textarea"
            name="textarea"
            id="textarea"
            onChangeCB={this.onChangeCB}
            className="inp-textarea"
          />

          <div className="frm-group">
            <label htmlFor="">Checkbox</label>
            <Checkbox name="level" value="beginner" checked={true} title="Beginner" />
            <Checkbox name="level" value="intermediate" checked={false} title="Intermediate" />
            <Checkbox name="level" value="advanced" checked={false} title="Advanced" />
          </div>

          <div className="frm-group">
            <label htmlFor="">Radio</label>
            <Radio
              name="gender"
              className="inp-radio"
              label="Male"
              value="male"
              checked={false}
              id="inp-rdo-male"
            />
            <Radio
              name="gender"
              className="inp-radio"
              label="Female"
              value="female"
              checked={true}
              id="inp-rdo-female"
            />
          </div>

          <div className="frm-group">
            <label htmlFor="">Textbox</label>
            <Select
              name="select"
              options={this.state.selectOptions}
              value="option3"
              onChangeCB={this.onChangeCB}
            />
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
