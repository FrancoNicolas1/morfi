import React, { useState } from 'react';
import LoginForm from './Login';
import RegisterForm from './RegistroDeUsuario';

const Navbar = () => {
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);

  return (
    <nav>
        <div>
          {isSignupFormVisible ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
          <button
            type="button"
            onClick={() => setIsSignupFormVisible(!isSignupFormVisible)}
          >
            {isSignupFormVisible ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
    </nav>
  );
}

export default Navbar;
