import { useState } from 'react';
import Input from '../../Components/InputReuseable/Input';
import './login.css';

const Login = () => {
  const [formVal, setFormVal] = useState({
    username: {
      value: '',
      error: false,
    },
    password: {
      value: '',
      error: false,
    },
    formError: true,
  });

  const formFieldHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value, name);
    let error = false;
    if (name === 'username') {
      error = value.trim().length < 5;
    } else if (name === 'password') {
      error = value.trim().length < 7;
    }
    setFormVal((prev) => {
      return {
        ...prev,
        [name]: {
          value,
          error,
        },
      };
    });
    setFormVal((prev) => {
      return { ...prev, formError: isFormError(prev) };
    });
  };

  const isFormError = ({ username, password }) => {
    return (
      username.error ||
      password.error ||
      username.value === '' ||
      password.value === ''
    );
  };

  const loginFormHandler = (e) => {
    e.preventDefault();
    console.log('form value', formVal.username.value, formVal.password.value);
  };

  return (
    <div className="form-box">
      <form onSubmit={loginFormHandler}>
        <h2>Login Form</h2>
        <Input
          onChange={formFieldHandler}
          className={`${formVal.username.error ? 'error-field' : ''}`}
          field={{
            type: 'text',
            name: 'username',
            value: formVal.username.value,
            placeholder: 'Username',
            autoComplete: 'false',
          }}
        />
        <Input
          onChange={formFieldHandler}
          className={`${formVal.username.error ? 'error-field' : ''}`}
          field={{
            type: 'password',
            name: 'password',
            value: formVal.password.value,
            placeholder: 'Password',
            autoComplete: 'false',
          }}
        />
        <div className="submitBtn">
          <button disabled={formVal.formError}>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
