import React, { Component } from "react";
import validate from "./Validate";

class App extends Component {
  state = {
    formControls: {
      name: {
        value: "",
        placeholder: "Input your name",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3
        }
      },
      email: {
        value: "",
        placeholder: "Email Address",
        valid: false,
        touched: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: ""
      }
    }
  };

  fnOnchange = event => {
    let name = event.target.name;
    let value = event.target.value;

    const updatedControls = { ...this.state.formControls };
    const updatedFormElement = { ...updatedControls[name] };

    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(
      value,
      updatedFormElement.validationRules
    );

    updatedControls[name] = updatedFormElement;

    this.setState({
      formControls: updatedControls
    });
  };

  fnFormSubmit = event => {
    event.preventDefault();

    console.log("[formControls]", this.state.formControls);
  };

  render() {
    const { formControls } = this.state;

    let inputNameClass = "form-input";
    if (formControls.name.touched && !formControls.name.valid) {
      inputNameClass = "form-input error";
    }

    let inputEmailClass = "form-input";
    if (formControls.email.touched && !formControls.email.valid) {
      inputEmailClass = "form-input error";
    }

    return (
      <div>
        <form onSubmit={this.fnFormSubmit}>
          <label htmlFor="">
            {formControls.name.valid ? "valid" : "Invalid"}
          </label>

          <div>
            <input
              type="text"
              placeholder={formControls.name.placeholder}
              name="name"
              value={formControls.name.value}
              onChange={this.fnOnchange}
              className={inputNameClass}
            />
          </div>

          <div>
            <label htmlFor="">
              {formControls.email.valid ? "valid" : "Invalid"}
            </label>

            <input
              type="email"
              name="email"
              placeholder={formControls.email.placeholder}
              value={formControls.email.value}
              onChange={this.fnOnchange}
              className={inputEmailClass}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
