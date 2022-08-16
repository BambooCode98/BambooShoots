import React,{useState,useEffect} from 'react'
import Picture from '../Picture';
import Link from 'next/link';
import Image from 'next/image';


export default function Photos({userSession}) {
  const [images, setImages] = useState();

  useEffect(() => {
    async function getImages() {
      const fetchUserSession = await fetch('/api/getUserImages');
      const userSession = await fetchUserSession.json();
      setImages(userSession[0].images);
    }
    getImages()
  },[])

  return (
    <>
      <div>
      </div>
      <div className='sm:w-full'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2 sm:p-0 overflow-auto'>
          {images? 
            images.map(image => {
              // console.log(image.id);
              let source = image.url;
              let imgID = image.id;
              if(source === "") {
                return
              } else {
                return(
                  <>
                    <Link href={`/account/photo/${imgID}`} key={imgID}>
                      <a className=''>
                        <img src={source} alt="" className='cursor-pointer hover:opacity-80 object-cover w-80 h-72 transition duration-300 ease-in-out'/>
                        
                      </a>
                    </Link>
                  </>
                )
              }
            })
          : <div className='w-screen h-screen flex justify-center items-center'>
            <p className='text-3xl'>
              Loading
              <i className="fas fa-spinner animate-spin"></i>
            </p>
          </div> }
          
        </div>
      </div>
    </>
  )
}
