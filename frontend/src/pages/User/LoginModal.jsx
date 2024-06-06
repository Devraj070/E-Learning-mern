import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './LoginModal.css';
import SignUpModal from './SignUpModal';
import ForgotPasswordModal from './ForgotPasswordModal';

const LoginModal = ({ isOpen, onClose, setIsLoggedIn }) => {
  const modalRef = useRef(null);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleModalClick = (event) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  const resetLoginForm = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  // const handleLoginFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:3001/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ username, password })
  //     });

  //     if (response.ok) {
  //       // alert("Login successful");
  //       window.location.reload();
  //       resetLoginForm();
  //       onClose();
  //       setIsLoggedIn(true); // Update isLoggedIn state to true
  //     } else {
  //       const errorMessage = await response.text();
  //       alert("Invalid username or password");
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        const { userId } = data; // Assuming the response includes the user ID
        
        // console.log('User ID:', userId);

        // Store user ID in sessionStorage
        sessionStorage.setItem('userId', userId);
        
  
        // Reload the page to reflect logged-in state
        window.location.reload();
  
        // Reset form fields and close the modal
        resetLoginForm();
        onClose();
        setIsLoggedIn(true); // Update isLoggedIn state to true
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  

  const toggleSignUp = () => {
    setSignUpOpen(!isSignUpOpen);
  };

  const toggleForgotPassword = () => {
    setForgotPasswordOpen(!isForgotPasswordOpen);
  };

  const handleSignUpModalClose = () => {
    setSignUpOpen(false);
  };

  const handleClose = () => {
    resetLoginForm();
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" ref={modalRef} onClick={handleModalClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>{isSignUpOpen ? 'Sign Up' : 'Login'}</h2>
              <FaTimes className="close-icon" onClick={handleClose} />
            </div>
            {isSignUpOpen ? (
              <SignUpModal isOpen={isOpen} onClose={handleSignUpModalClose} />
            ) : (
              <form onSubmit={handleLoginFormSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <p className="forgot-password" onClick={toggleForgotPassword}>Forgot password?</p>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
                <div className='font-size-signUp'>Don't have an account? <span className='sign-up' onClick={toggleSignUp}>Sign up</span></div>
              </form>
            )}
          </div>
        </div>
      )}
      <ForgotPasswordModal isOpen={isForgotPasswordOpen} onClose={toggleForgotPassword} />
    </>
  );
};

export default LoginModal;
