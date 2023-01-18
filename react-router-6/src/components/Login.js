import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const login = () => {
        localStorage.setItem('login', true);
        navigate('/');
    }

    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login');
        if(login) {
            navigate('/')
        }
    },[]);
  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f1f1f1',
          display: 'inline-block',
          boxShadow: '2px 2px 4px red',
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          style={{ padding: '6px', marginBottom: '6px' }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          style={{ padding: '6px', marginBottom: '6px' }}
        />
        <br />
        <button onClick={login} style={{ padding: '6px', marginBottom: '6px' }}>Submit</button>
      </div>
    </>
  );
};

export default Login;
