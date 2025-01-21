import { useState } from 'react';
import { Modal, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';

import './Login.css';

function Login({ show, onHide }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');




  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    setSuccessMessage('');
    setEmail('');
    setPassword('');
  };

  return (
    <Modal show={show} onHide={onHide} centered className="login-modal">
      <Modal.Body className="p-4">
        <div className="text-center mb-4">
          <img src="/logo.svg" alt="Abacus.AI" height="30" className="mb-3" />
          <h2 className="mb-4">{isSignUp ? 'Create your account' : 'Sign in to ChatLLM Teams'}</h2>
        </div>

        {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
        {successMessage && <Alert variant="success" className="mb-4">{successMessage}</Alert>}

        <div className="social-login-buttons">
          <Button variant="outline-light" className="w-100 mb-3">
            <FaApple className="me-2" />
            {isSignUp ? 'Sign up' : 'Sign in'} with Apple
          </Button>
          <Button variant="outline-light" className="w-100 mb-3">
            <FaGoogle className="me-2" />
            {isSignUp ? 'Sign up' : 'Sign in'} with Google
          </Button>
          <Button variant="outline-light" className="w-100 mb-4">
            <FaMicrosoft className="me-2" />
            {isSignUp ? 'Sign up' : 'Sign in'} with Microsoft
          </Button>
        </div>

        <Form >
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
             
              className="custom-input"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
          
              className="custom-input"
              required
            />
          </Form.Group>

          <Button 
            type="submit" 
            className="w-100 mb-3 sign-in-btn" 
            disabled={loading}
          >
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              isSignUp ? 'Sign Up' : 'Sign In'
            )}
          </Button>

          {!isSignUp && (
            <div className="text-center mb-3">
              <Button variant="link" className="forgot-password-link">
                Forgot Password?
              </Button>
            </div>
          )}

          <div className="text-center">
            <p className="mb-2">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Button variant="link" className="signup-link" onClick={toggleMode}>
                {isSignUp ? 'Sign in' : 'Sign up'}
              </Button>
            </p>
            <small className="terms-text">
              By {isSignUp ? 'signing up' : 'signing in'}, you agree to the{' '}
              <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </small>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;