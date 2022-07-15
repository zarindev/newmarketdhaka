export const formValidate = (formData) => {
  const errors = {};
  const {
    email,
    password,
    confirmPassword,
    name,
    address,
    binNumber,
    taxNumber,
    phoneNumber,
  } = formData;

  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Email address is invalid';
  }
  if (!password) {
    errors.password = 'Password is required';
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    )
  ) {
    errors.password =
      'Password must contain at least 8 characters, at least 1 number, both lower and uppercase letters, and 1 special character';
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Password is required';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords did not match';
  }

  if (!name || !address) {
    errors.name = 'Company Name is required';
    errors.address = 'Company Address is required';
  }

  if (!binNumber || !taxNumber) {
    errors.binNumber = 'Company BIN Number is required';
    errors.taxNumber = 'Company Tax Number is required';
  }

  if (!phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (/^[A-Za-z\s]+$/.test(phoneNumber)) {
    errors.phoneNumber = 'Please input only a + and numbers';
  }

  return errors;
};
