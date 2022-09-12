import { NextPage } from 'next';
import { useState } from 'react';
import { supabaseClient } from '../lib/client';
import logoOrange from '../public/logoOrange.png';

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('');

  const handleLogin = async (email: string) => {
    try {
      const { user, error } = await supabaseClient.auth.signIn({
        email,
      });
      if (error) throw error;
      console.log(user);
      alert('Check your email for the login link!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <img
            src={logoOrange.src}
            alt="logo"
            width="200"
            height="50"
          />
          <div className="flex justify-center"></div>
          <h3 className="text-2xl font-bold">WMS: Log In</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <span className="text-s tracking-wide text-red-600">
                  We'll send you a magic link to login to the app
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin(email);
                  }}
                  className="px-6 py-2 mt-4 text-black bg-yellow-500 rounded-lg hover:bg-blue-900"
                >
                  Get Link
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
