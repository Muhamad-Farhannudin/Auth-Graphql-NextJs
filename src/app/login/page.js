'use client';

import { useRouter } from 'next/navigation'
import { gql } from "@apollo/client";
// import { useDispatch } from 'react-redux';
// import { userLogin } from '../../redux/auth/actions';

export default function LoginPage() {
  const router = useRouter();
  // const dispath = useDispatch()
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const apiUrl = 'http://207.148.68.106:2301';

    const response = await fetch(apiUrl, {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        query: gql`
          mutation {
            login(email:"superadmin@careerbridge.com", password:"balakutak") {
              token
            }
          }`,
      }),
    });

    // router.push('/');
    if (response.ok) {
      const data = await response.json(); 
      const token = await data.data.login.token; 
      localStorage.setItem('token', token); 
      router.push('/');
    } else {
      console.log("error");
    }
    // if (response?.data?.data) {
    //   dispath(userLogin(res.data.data.token, res.data.data.password, res.data.data.email));
    //   router.push('/');
    // } else {
    //   console.log("GAGAL")
    // }

  }




  return (
      <div className="w-full">
        <div className="max-w-2xl mx-auto mt-52 bg-blue-900 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4 text-white text-center pt-4">Login</h3>
          <form className=" w-1/2 flex flex-col ml-5 gap-y-3" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
              <p className="text-lg text-blue-100">Email</p>
              <input type="email" placeholder="email" required className='py-1 rounded-lg placeholder:pl-3' />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg text-blue-100">Password</p>
              <input type="password" placeholder="password" required className='py-1 rounded-lg placeholder:pl-3' />
            </div>
            <button type='submit' className='bg-blue-300 ml-5 text-black font-semibold px-5 py-2 mt-4 mb-4 rounded-xl'>Login</button>
          </form>
        </div>
      </div>
  )
}