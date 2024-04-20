"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import useStore from '../utils/store';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_MUTATION);
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email, password }
      });
      const token = data.login.token;
      localStorage.setItem('token', token);
      setLoggedIn(true);
      router.push('/');
    } catch (error) {
      alert('Email dan Password Salah, Silahkan Coba Lagi...')
      console.error('Login failed:', error);
    }
  };


  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto mt-52 bg-blue-900 rounded-2xl">
        <h3 className="text-3xl font-bold mb-4 text-white text-center pt-4">Login</h3>
        <form className=" w-1/2 flex flex-col ml-5 gap-y-3" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <p className="text-lg text-blue-100">Email</p>
            <input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} className='py-1 rounded-lg placeholder:pl-3' />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg text-blue-100">Password</p>
            <input type="password" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)} className='py-1 rounded-lg placeholder:pl-3' />
          </div>
          <button type='submit' className='bg-blue-300 ml-5 text-black font-semibold px-5 py-2 mt-4 mb-4 rounded-xl'>Login</button>
        </form>
      </div>
    </div>
  )
}
