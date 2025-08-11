import { useState } from 'react';
import type {  FormEvent } from 'react';

import axios, { AxiosError } from 'axios';
import { useParams, Link } from 'react-router-dom';

interface ApiResponse {
  message?: string;
  error?: string;
}

function ForgotPassword() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { token } = useParams<{ token: string }>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let response;
      if (token) {
        // Reset password
        response = await axios.post<ApiResponse>(
          `${import.meta.env.VITE_API_URL}/users/reset-password/`,
          { token, password }
        );
      } else {
        // Request password reset
        response = await axios.post<ApiResponse>(
          `${import.meta.env.VITE_API_URL}/users/forgot-password/`,
          { email }
        );
      }
      setMessage(response.data.message || '');
      setError('');
    } catch (err) {
      const axiosErr = err as AxiosError<ApiResponse>;
      setError(axiosErr.response?.data?.error || 'Operation failed');
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {token ? 'Reset Password' : 'Forgot Password'}
        </h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {token ? (
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            {token ? 'Reset Password' : 'Send Reset Link'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          <Link to="/" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
