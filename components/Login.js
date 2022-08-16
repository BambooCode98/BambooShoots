import React, { useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import Layout from './Layout'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggingIn, setLoggingIn] = useState(true)
  // const {data:session} = useSession();
  // console.log(session);
  function handleClick() {
    signIn();
    location.href = 'https://bambooshoots.herokuapp.com/account';
  }

  return (
    <>
      <Layout>
        <h1 className='text-4xl font-bold sm:text-5xl md:text-7xl bg-green-700/[0.85] w-screen text-center p-1 border-solid border-t-4 border-b-4 border-green-900 select-none'>BambooShoots</h1>

        <button onClick={() => handleClick()} className='text-4xl font-bold select-none p-2 mt-16 rounded-md cursor-pointer bg-green-700/[0.85] border-solid border-t-4 border-4 border-green-900 md:hover:scale-105'>{loggingIn ? 'Login' : 'Register'}</button>

        {/* <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' className='border-solid border-black border-2 p-1'></input>

        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' className='border-solid border-black border-2 p-1'></input>

        <button type='submit' className='rounded-sm p-1 w-1/3 bg-green-400 border-black border-solid border-2 font-bold sm:w-2/12 lg:w-1/12'>Submit</button>

        <h5 onClick={() => {setLoggingIn(!loggingIn)}} className='text-white select-none bg-black/[0.75] p-1 rounded-sm'>{loggingIn ? 'Register' : 'Login'}</h5> */}
      </Layout>
    </>
  )
}
