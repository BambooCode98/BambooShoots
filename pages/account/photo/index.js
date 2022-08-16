import React, { useEffect } from 'react'
import ProfileLayout from '../../../components/ProfileLayout'
import Head from 'next/head'
import Photos from '../../../components/profileComponents/Photos'


export default function Photo() {

  return (
    <>
      <Head>
        <title>BambooShoots</title>
      </Head>
      <ProfileLayout >
        <Photos />
      </ProfileLayout>
    </>
  )
}
