import React, {useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import defaultPic from '../images/circle-user-solid.svg';




export default function ProfilePage() {
  const {data:session} = useSession();
  const [fileInput, setFiles] = useState();


  async function submitHandler(e) {
    e.preventDefault();
    // console.log(fileInput);
    fileInput.forEach(async file => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // setImageBinary(reader.result)
        let imageBinary = reader.result;
        fetch('/api/changeuserpic', {
          method: 'POST',
          body: imageBinary
        })
        
      }
      reader.onerror = () => {
        console.log(reader.error);
      }
    });
    window.location.reload();    
  }

  function handleFiles(e) {
    setFiles(Array.from(e.target.files));
  }


  return (
    <>
      <Head>
        <title>BambooShoots</title>
      </Head>
      <div className='relative w-full flex justify-center overflow-auto'>
        <div className=''>
          {/* <h1 className='border-2 h-16 w-32 text-center text-xl'>Profile</h1> */}
          <p className='fixed top-0 m-3 right-0 bg-gray-800 text-green-400 p-2 rounded-md w-3/4 sm:w-1/4 md:w-1/5 md:h-1/12 lg:w-1/4 text-center'>Logged in as <span className='font-bold'>{session.user.name}</span> from {session.user.email}</p>
          <button onClick={() => signOut({callbackUrl: 'http://localhost:3000'})} className='hover:md:scale-105 border-2 border-black m-3 p-3 duration-300 bg-gray-800 text-green-400 font-bold rounded-lg w-[120px] fixed z-40 bottom-0 right-0 cursor-pointer'>Sign Out</button>

        </div>
        <div className='sm:top-0 sm:left-0 sm:absolute sm:w-full sm:h-full sm:pl-16 sm:pt-5 flex flex-col gap-5 '>
          <div className='w-5/6 ml-7 sm:ml-0 sm:mr-5 lg:mr-0 lg:ml-5 p-5 mt-20 sm:p-0 sm:w-1/2 sm:mt-0'>
            <h1 className='md:text-2xl border-b-2 mb-4'>Customize:</h1>
            <div className='bg-gray-800/[0.95] text-green-400 rounded-md p-2 ml-3 md:ml-5 border-2 border-black sm:w-full'>
              <p className='md:pl-4'>Change profile picture:</p>
              <form className='w-3/4 h-1/6 md:h-auto sm:h-auto relative md:static sm:w-full lg:w-3/4 p-1 flex justify-center items-center z-10 md:ml-2 text-sm py-1' onSubmit={(e) => submitHandler(e)}>
              <input type='file' id='file' accept='.png,.jpeg,.jpg,.gif' className='border border-gray-500 md:w-auto rounded-md cursor-pointer' onChange={(e) => handleFiles(e)}/>
              {/* <label className='cursor-pointer border-r-2 border-black pr-1 md:pr-0 text-center lg:pr-2 hover:text-gray-400 transition duration-300 ease-in-out' htmlFor='file'>
                Choose Profile Picture
              </label> */}
              <button type='submit' className=' pl-1 md:pl-0 sm:ml-1 lg:ml-3 hover:text-gray-400 transition duration-300 ease-in-out md:text-lg'>Submit</button>
              </form>
            </div>
          </div>
          {/* <div className='place-self-end'>
            <h1 className='md:text-2xl'>Options:</h1>
            <p className='md:text-2xl'>Coming Soon!</p>
          </div> */}
        </div>
      </div>

        

    </>
  )
}
