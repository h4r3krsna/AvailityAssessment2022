const validator = require("validator");

const validateSignUpForm = (payload) => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (
    !payload ||
    typeof payload.firstname !== "string" ||
    payload.firstname.trim().length === 0
  ) {
    isFormValid = false;
    errors.firstname = "Please provide a first name.";
  }

  if (
    !payload ||
    typeof payload.lastname !== "string" ||
    payload.lastname.trim().length === 0
  ) {
    isFormValid = false;
    errors.lastname = "Please provide a last name.";
  }

  if (
    !payload ||
    typeof payload.npinumber !== "string" ||
    payload.npinumber.trim().length === 0
  ) {
    isFormValid = false;
    errors.npinumber = "Please provide NPI number.";
  }

  if (
    !payload ||
    typeof payload.address !== "string" ||
    payload.address.trim().length === 0
  ) {
    isFormValid = false;
    errors.address = "Please provide business address.";
  }

  if (
    !payload ||
    typeof payload.phone !== "string" ||
    !validator.isMobilePhone(payload.phone, ["en-US"])
  ) {
    isFormValid = false;
    errors.phone =
      "Please provide a valid telephone number starting with + and country code.";
  }

  if (
    !payload ||
    typeof payload.email !== "string" ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a valid email address.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors
  };
};

module.exports = {
  validateSignUpForm: validateSignUpForm
};
