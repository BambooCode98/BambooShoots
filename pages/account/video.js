import React from 'react'
import Head from 'next/head'
import ProfileLayout from '../../components/ProfileLayout'
import Videos from '../../components/profileComponents/Videos'

export default function Video() {
  return (
    <>
    <Head>
      <title>BambooShoots</title>
    </Head>
      <ProfileLayout>
        <Videos/>
      </ProfileLayout>
    </>
  )
}
