import Head from 'next/head';
import { FaLink } from 'react-icons/fa';
import { FaPencilRuler } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Trakteer from '../Components/Trakteer';
export default function Home() {
  const router = useRouter();
  const [longURL, setLongURL] = useState('');
  const [alias, setAlias] = useState(undefined);

  const handleClick = async (e) => {
    const _newURL = longURL;

    if (alias) {
      if (alias.length < 5) {
        alert('Input Alias min 5 chars');
        return false;
      } else {
        const response = await fetch('/api/url', {
          method: 'POST',
          headers: {
            content: 'application/json',
          },
          body: JSON.stringify({ url: _newURL, code: alias }),
        });
        setLongURL = '';
        setAlias(undefined);
        // console.log('Indedx:', response);
        router.push({ pathname: '/app' });

        return response;
      }
    } else {
      const response = await fetch('/api/url', {
        method: 'POST',
        headers: {
          content: 'application/json',
        },
        body: JSON.stringify({ url: _newURL }),
      });
      setLongURL = '';
      // console.log('Indedx:', response);
      router.push('/app');
      return response;
    }
  };
  return (
    <div className='bg-gradient-20 from-cyan-500 to-orange-600  h-screen  w-full mx-auto'>
      <Head>
        <title>Pen-dekin</title>
      </Head>
      <main className='h-screen'>
        <h1 className='text-4xl font-bold cursor-pointer text-[#F8F9FA] pl-8 pt-12 hover:underline '>
          PEN-DEKIN
        </h1>
        <section className='flex flex-wrap flex-row'>
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
                Alias
              </h1>
              <input
                value={alias ?? ''}
                onChange={(e) => setAlias(e.target.value)}
                className='w-4/5  ml-6 h-14 pl-2 rounded-sm bg-[#F8F9FA] focus:bg-white outline-none border border-gray-200'
                type='text'
              />
            </div>
            {/* Button */}
            <button
              className='h-12 w-4/5 mt-6 rounded-md ml-9 bg-orange-600 hover:bg-orange-800 text-white font-semibold'
              type='submit'
              onClick={handleClick}
            >
              Let&#39;s Pen-dekin
            </button>
          </div>
          <div className=' h-96 w-4/5  md:mx-0 md:ml-32 rounded-md mt-12 sm:w-96 hidden md:block'>
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
}
