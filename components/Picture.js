import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

import React, { useState }  from 'react'


export default function Picture({image}) {
  const noDisplay='bottom-0 right-0 opacity-0 duration-300 ease-in z-0';
  const showDisplay = 'bottom-0 right-0 w-auto h-auto opacity-100 duration-300 ease-in z-0';
  const [iconDisplay,setIconDisplay] = useState(showDisplay)
  // console.log(image.id);
  let source = image.url;
  let imgId = image.id;

  function showIcons() {
    if(iconDisplay === showDisplay) {
      setIconDisplay(noDisplay)
    } else {
      setIconDisplay(showDisplay)
    }
  }

  async function deletePic(e) {
    e.stopPropagation();
    console.log('pic delted');
    fetch('/api/deleteImage', {
      method: 'DELETE',
      body: imgId
    })
    location.href = 'https://bambooshoots.herokuapp.com/account/photo'
  }

  return (
    <>
    <Head>
      <title>BambooShoots</title>
    </Head>
      <div className='w-screen h-screen bg-black z-10' onClick={(e) => showIcons(e)}>
        <img src={source} alt={imgId} className='object-contain w-screen h-screen z-10'/> 
        <div className={iconDisplay}>
          <i className="fa-solid fa-trash-can absolute z-20 bottom-0 right-0 mr-4 mt-2 text-white text-2xl md:text-3xl md:mb-4" onClick={(e) => deletePic(e)}></i>

        </div>
      </div>
    </>
  )
}
