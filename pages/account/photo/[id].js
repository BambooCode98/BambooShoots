import { prisma } from "./lib/prisma.ts";
import React from 'react'
import Picture from '../../../components/Picture';
import { useSession, status } from 'next-auth/react';



export default function PicID({image}) {
  const {data: session} = useSession();
  
  if(session) {
    return (
      <>
        <Picture image={image}/>
      </>
    )
  } else {
    return( 
      <>
        <h1>Login to View this Page.</h1>
      </>
    )
  }
}

export async function getStaticProps({params}) {
  // console.log(params.id);
  const id = params.id;
  
  const image = await prisma.image.findUnique({
    where: {
      id: id
    },
    select: {
      url: true,
      id: true,
    }
  })
  // console.log(image);
  return{
    props: { image },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const imageIds = await prisma.image.findMany();
  // console.log(imageIds[0].id);
  return{
    paths: imageIds.map(image => {
      const id = image.id;
      return {
        params: {id}
      }
    }),
    fallback: 'blocking'
  }
}

