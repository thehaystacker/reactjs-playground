const validate = (value, rules) => {
  console.log("[validate value]", value);
  console.log("[validate rules]", rules);

  let isValid = true;

  for (const rule in rules) {
    switch (rule) {
      case "minLength":
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;

      case "isEmail":
        isValid = isValid && rules[rule] && emailValidator(value);
        break;

      default:
        isValid = true;
        break;
    }
  }

  return isValid;
};

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
};

const emailValidator = value => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
};

export default validate;
