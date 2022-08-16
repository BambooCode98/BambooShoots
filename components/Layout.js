import React from 'react'
import { useSession } from 'next-auth/react'


export default function Layout({children}) {
  const {data:session} = useSession();

  if(session) {
    return(
      <>
        {children}
      </>
    )
  } else {
    return (
      <div className='flex w-screen h-screen justify-center items-center flex-col gap-5 bg-bamboo bg-cover'>
        {children}
      </div>
    )
  }
}
