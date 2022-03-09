const validationInfo = (values) => {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = '*first name is required!';
  } else if (values.firstName.length < 3) {
    errors.firstName = '*first name needs to be 3 characters or more';
    }

  if (!values.lastName.trim()) {
    errors.lastName = '*last name is required!';
  } else if (values.lastName.length < 3) {
    errors.lastName = '*last name needs to be 3 characters or more';
    }
    
  if (!values.email) {
    errors.email = '*email is required';
   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
     errors.email = '*email address is invalid';
    }
    
  return errors;
}

export default validationInfo;
