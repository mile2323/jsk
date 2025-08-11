import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import axios from '../../utils/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';

interface Google {
  accounts: {
    id: {
      initialize: (options: { client_id: string; callback: (response: { credential: string }) => void }) => void;
      renderButton: (element: HTMLElement | null, options: Record<string, unknown>) => void;
    };
  };
}

declare global {
  interface Window {
    google?: Google;
  }
}

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios
        .get(`${import.meta.env.VITE_API_URL}/users/csrf/`, {
          withCredentials: true,
        })
        .then(() => console.log('CSRF cookie set'))
        .catch((err) => console.error('Failed to set CSRF', err));

      await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login/`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      navigate('/dashboard');
    } catch (err: unknown) {
      if (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } else {
        setError('An unexpected error occurred');
      }
      console.error(err);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: { credential: string }) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users/google-login/`,
        { token: credentialResponse.credential },
        { withCredentials: true }
      );
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Google login failed');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleGoogleSuccess,
        });
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          { theme: 'outline', size: 'large' }
        );
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        {/* Optional: Google Sign-In */}
        {/* 
        <div className="mt-4 text-center">
          <div id="google-signin-button"></div>
        </div> 
        */}

        <p className="mt-4 text-center text-sm">
          <Link to="/forgot-password" className="text-indigo-600 hover:underline">
            Forgot Password?
          </Link>
        </p>
        <p className="mt-2 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
