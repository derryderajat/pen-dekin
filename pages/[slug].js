import React from 'react';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FaCopy, FaLink } from 'react-icons/fa';
import { FaPencilRuler } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { AiFillCopy } from 'react-icons/ai';
import { FiCornerUpRight } from 'react-icons/fi';
import Head from 'next/head';
import Trakteer from '../Components/Trakteer';

function Mine({ data }) {
  const router = useRouter();
  const [longURL, setLongURL] = useState(data.url);
  const [alias, setAlias] = useState(data.code);
  const [isLoading, setLoading] = useState(false);
  function handleClick() {
    deleteCookie('key');
    router.push('/');
  }

  // console.log(router);
  function copy2Clipboard() {
    var copyText = document.getElementById('alias');

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert('Success \ncopied to clipboard');
  }
  if (isLoading) return <p>Loading...</p>;
  if (!longURL) return <p>Loading...</p>;
  if (router.query.slug === 'app') {
    return (
      <div className='bg-gradient-20 from-cyan-500 to-orange-600  h-screen  w-full mx-auto'>
        <Head>
          <title>Pen-dekin</title>
        </Head>
        <main className=''>
          <h1
            onClick={handleClick}
            className='text-4xl font-bold cursor-pointer text-[#F8F9FA] pl-8 pt-12 hover:underline '
          >
            PEN-DEKIN
          </h1>
          <section className='flex flex-row'>
            <div className='bg-[#F8F9FA] h-fit pb-8 w-96 mx-auto md:mx-0 md:ml-32 rounded-md mt-12 sm:w-96'>
              <div>
                <h1 className='text-xl mb-2 ml-4 pt-4 flex flex-row items-center '>
                  <span>
                    <FaLink className='text-orange-600 mr-6' />
                  </span>
                  Long URL for pen-dekin
                </h1>
                <input
                  className='w-4/5  ml-6 h-14 pl-2 rounded-sm bg-[#F8F9FA] focus:bg-white outline-none border border-gray-200'
                  type='text'
                  value={longURL}
                  onChange={(e) => setLongURL(e.target.value)}
                  required
                />
              </div>
              <div>
                <h1 className='text-xl mb-2 ml-4 pt-4 flex flex-row items-center '>
                  <span>
                    <FaPencilRuler className='text-orange-600 mr-6' />
                  </span>
                  Your PEN-DEKIN
                </h1>
                <input
                  id={'alias'}
                  value={`${process.env.SERVER}/${alias}`}
                  onChange={(e) => setAlias(e.target.value)}
                  className='w-4/5  ml-6 h-14 pl-2 rounded-sm bg-[#F8F9FA] focus:bg-white outline-none border border-gray-200'
                  type='text'
                />
              </div>
              {/* Redirect & Copy */}
              <div className='flex flex-row items-center justify-around w-full h-12'>
                <div
                  onClick={(e) => router.push(`/${alias}`)}
                  className='relative flex flex-col items-center group cursor-pointer font-semibold hover:text-white bg-white border border-[#092aac] hover:bg-[#092aac]  w-14 rounded-md h-8 '
                >
                  <FiCornerUpRight className='my-auto text-xl ' />
                  <div className='absolute bottom-6 flex-col items-center hidden mb-6 group-hover:flex'>
                    <span className='relative z-10 p-2 text-xs leading-none rounded-sm text-white whitespace-nowrap bg-[#092aac] shadow-lg w-fit'>
                      Visit URL
                    </span>
                  </div>
                </div>
                <div
                  onClick={copy2Clipboard}
                  className='relative flex flex-row items-center group cursor-pointer font-semibold text-white  bg-[#1F8244] hover:bg-[#013a06] justify-center  w-20 rounded-md h-8 '
                >
                  <AiFillCopy className='my-auto text-xl ' />
                  <span>Copy</span>
                  <div className='absolute bottom-6 flex-col items-center hidden mb-6 group-hover:flex'>
                    <span className='relative z-10 p-2 text-xs leading-none rounded-sm text-white whitespace-nowrap bg-[#092aac] shadow-lg w-fit'>
                      Copy to Clipboard
                    </span>
                  </div>
                </div>
              </div>
              {/* Button */}
              <button
                className='h-12 w-4/5 mt-6 rounded-md ml-9 bg-orange-600 hover:bg-orange-800 text-white font-semibold'
                type='submit'
                onClick={handleClick}
              >
                Shorten another
              </button>
            </div>
            <div className=' h-96 w-4/5 mx-auto md:mx-0 md:ml-32 rounded-md mt-12 sm:w-96 hidden md:block'>
              <h2 className='text-2xl text-white font-semibold'>Welcome to</h2>
              <h1 className='text-4xl -mt-2 font-bold text-white'>PEN-DEKIN</h1>
              <h3 className='mt-6 text-xl text-white font-semibold'>
                Enjoy Free shortener URL:
              </h3>
              <ul className='mt-6'>
                <li>
                  <span className='flex flex-row items-center text-white text-lg font-semibold'>
                    <FaCheck className='mr-2' />
                    Easy Link Shortening
                  </span>
                </li>
                <li>
                  <span className='flex flex-row items-center text-white text-lg font-semibold'>
                    <FaCheck className='mr-2' />
                    Full Link History
                  </span>
                </li>
                <li>
                  <span className='flex flex-row items-center text-white text-lg font-semibold'>
                    <FaCheck className='mr-2' />
                    Customized TinyURLs
                  </span>
                </li>
              </ul>
            </div>
            <div className=' h-64 w-4/5 mx-auto md:mx-0  rounded-md mt-12 sm:w-64 '>
              <Trakteer />
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return <div>Bukan </div>;
  }
}
export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  if (slug !== 'app') {
    const response = await fetch(`${process.env.SERVER}/api/url?code=${slug}`);
    const data = await response.json();
    return {
      redirect: {
        permanent: false,
        destination: data.url,
      },
    };
    // console.log(data);
  }
  let data = {};
  if (slug == 'app') {
    const id = context.req.cookies.key;
    // deleteCookie('key');
    const response = await fetch(`${process.env.SERVER}/api/url?id=${id}`);
    const dataAPI = await response.json();
    // console.log('APPS', data);
    data = dataAPI;
  }

  return { props: { data } };
};
export default Mine;
