export const formValidate = (formData) => {
  const errors = {};
  const { email, password, confirmPassword } = formData;
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

  return errors;
};
