import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import ProfilePage from '../components/ProfilePage'
import Login from '../components/Login'
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import ProfileLayout from '../components/ProfileLayout'

export default function Home() {
  const {data:session} = useSession();


  if(session) {
    return(
      <>
        <Head>
          <title>BambooShoots</title>
          <meta name="description" content="" />
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
        <div className=''>
          <ProfileLayout/>
        </div>
        <p className='absolute top-0 left-1/2 p-9'>Highlights: Coming Soon!</p>
      </>
    )
  } else {
    return (
      <div className="bg-white">
        <Head>
          <title>BambooShoots</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login/>
      </div>
    ) 
  }

}
