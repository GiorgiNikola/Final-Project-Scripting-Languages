import React from 'react';

const Auth = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin('email')}>Login with Email</button>
      <button onClick={() => handleLogin('facebook')}>Login with Facebook</button>
    </div>
  );
};

export default Auth;
