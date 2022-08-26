import React from 'react'
import { getSession,useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import defaultPic from '../images/circle-user-solid.svg';
// import logoPic from '../images/Logo.png'

let noDisplay = 'w-0 h-screen fixed sm:relative flex-wrap flex flex-col sm:w-0 lg:w-0 md:text-xl px-0 py-2 lg:w-0 lg:pr-0 gap-0 md:border-r-0 border-black select-none sm:pt-20 justify-center sm:justify-start text-white bg-gray-800 z-40 duration-300 -translate-x-[250px] ease-in overflow-x-hidden';
let showDisplay = 'w-screen h-full sm:h-screen fixed sm:relative flex-wrap flex flex-col sm:w-2/5 md:w-3/5 lg:w-1/3 md:text-xl px-4 py-2 lg:pr-2 gap-5 md:border-r-2 border-black select-none sm:pt-20 justify-center sm:justify-start text-white bg-gray-800 z-40 duration-300 translate-x-0 ease-in ';

let showUploadClear = 'absolute block text-green-500 duration-300 top-0 left-1/3';
let closeUploadClear = 'hidden';



export default function ProfileLayout({children}) {
  const {data: session} = useSession();
  const [fileInput, setFiles] = useState();
  const [modalDisplay, setModalDisplay] = useState(noDisplay);
  const [profilePicture, setProfilePicture] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState(false);
  const [fileSelected, setFileSelected] = useState(true)
  const [finshUploading, setfinishUploading] =  useState(false)

  function userDisplay() {
    if(modalDisplay === noDisplay) {
      setModalDisplay(showDisplay)
    } else {
      setModalDisplay(noDisplay)
    }
  }

  async function submitHandler(e) {
    e.preventDefault();
    if(fileInput === undefined) {
      // console.log('please select an image');
      setFileSelected(false);
    } else {
      setFileSelected(true);
      e.preventDefault();
      // console.log(fileInput);
      fileInput.forEach(async file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          let imageBinary = reader.result;
          await fetch('/api/postUserPhotos',{
            method: 'POST',
            body: imageBinary
          }).then(() => {setfinishUploading(true)})
          // .then( res => {
          //   res? location.href='https://bamboo-shoots.vercel.app/account/photo' : null;
          // })
        }
        reader.onerror = (error) => {
          // console.log(reader.error);
          setReaderError(error);
        }
      });
      // location.href='https://bamboo-shoots.vercel.app/account/photo';    
    }
  }

  function handleFiles(e) {
    setFiles(Array.from(e.target.files));
    setSelectedFiles(true);
    setFileSelected(true);
  }

  function handleClick(e) {
    e.preventDefault();
  }

  
  
  if(session) {
    return (
      <>
        <div className='flex flex-col sm:flex-row gap'>
          <div className='fixed md:absolute w-10 h-10 md:w-12 md:h-12 m-2 md:m-3 hover:md:scale-125 select-none rounded-full md:p-1 z-50 transition duration-300 ease-in-out bg-green-500 overflow-hidden'>
            <div className='absolute left-0 top-0'>
              <Image
                src={profilePicture ? session.user.image : defaultPic}
                alt='Profile Pic'
                onClick={() => userDisplay()}
                width={55}
                height={55}
                layout='fixed'
              />
            </div>
          </div>
          <div className={modalDisplay}>
            <p className={finishUploading ? showUploadClear : closeUploadClear}>Upload Successful</p>
            <Link href='/account'>
              <a>
                <h1 className='cursor-pointer flex gap-2 text-green-400 w-auto sm:w-auto justify-center text-2xl md:text-4xl font-bold border-b-2 border-y-2 border-black'>BambooShoots
                  <span className='rounded-full w-25 h-25'>
                    {/* <Image 
                    src={logoPic}
                    alt="logo"
                    width={25}
                    height={25}
                    /> */}
                  </span>
                </h1>
              </a>
            </Link>
            <Link href='/account/profile'>
              <a className='text-lg cursor-pointer hover:sm:text-gray-400 flex gap-2 sm:ml-2 items-center sm:items-start md:text-2xl transition duration-300 ease-in-out md:w-1/4'>
              <i className="fa-solid fa-address-card pt-1 text-blue-300"></i>
                <h4 className='select-none'>Profile</h4>
              </a>
            </Link>

            <Link href="/account/photo">
              <a className='text-lg cursor-pointer hover:sm:text-gray-400 flex gap-2 select-none sm:ml-2 md:text-2xl items-center sm:items-start transition duration-300 ease-in-out sm:w-1/4'>
                <i className="fa-solid fa-image pt-1 text-emerald-500"></i>
                Photos
              </a>
            </Link>
            
            {/* <Link href="/account/video">
              <a className='cursor-pointer hover:md:scale-105 flex gap-2 md:ml-2 items-center md:items-start'>
                <i className="fa-solid fa-video pt-1"></i>  
                <h1>Videos</h1>
              </a>
            </Link> */}
            <form className='w-3/4 h-auto sm:h-auto sm:h-autostatic sm:w-3/4 p-1 flex flex-row justify-center items-center z-40 ml-9 md:ml-11 text-sm py-1 border-b-2 border-green-500' onSubmit={(e) => submitHandler(e)}>
            <input type='file' id='file' accept='.png,.jpeg,.jpg,.gif' className='border-solid border-black border-2 hidden' onChange={(e) => handleFiles(e)}  multiple/>
            <label className='cursor-pointer border-r-2 sm:border-b-0 border-black pr-1 sm:pr-2 text-center lg:pr-2 hover:text-gray-400 transition duration-300 ease-in-out' htmlFor='file'>
              Add Photos+
            </label>
            <button type='submit' className='border-l-2 sm:border-t-0 border-black pl-1 sm:pl-2 lg:pl-2 hover:text-gray-400 transition duration-300 ease-in-out'>Upload Photos </button>
            </form>
            { fileSelected ? null : <p className='absolute text-red-500 top-1/2 rounded-md'>Please Select An Image.</p> }
            <div className='overflow-auto text-xs sm:text-sm h-1/3 sm:h-4/6 md:h-2/6 lg:h-4/6'>
              {selectedFiles ? fileInput.map(file => {
                let fileName = file.name;
                return (
                  <li key={file.name}>{fileName}</li>
                )
              }) : <p>No Files Selected</p>}
            </div>
            {/* <p>Images</p> */}
            <h5 className='absolute bottom-0 left-0 m-2'>Copyright &copy; BambooCode98</h5>
          </div>
          <div className='h-screen sm:w-screen flex justify-center'>
            {children}
          </div>
        </div>
      </>
    )
  } else {
    return(
      <h1>Login to view this page.</h1>
    )
  }
}
