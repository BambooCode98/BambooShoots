import React, {useEffect} from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react';
import ProfileLayout from '../../components/ProfileLayout'



export default function AccountHome() {
  const {data: session} = useSession();
  
  

  if(session) {
    return (
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
  } else if(!session) {
    <h1>Login to View this Page.</h1>
  }
}
