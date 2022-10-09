import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TrakteerIcon from '../public/trbtn-icon.png';
function Trakteer() {
  const router = useRouter();

  return (
    <div className=''>
      <h1 className='text-3xl font-bold text-white mb-4'>
        Help me buy a Coffee:
      </h1>
      <button
        className='bg-[#be1e2d]  rounded-md hover:cursor-pointer w-fit h-fit px-4 py-2 flex flex-row items-center'
        onClick={(e) => router.push('https://trakteer.id/derryderajat/tip')}
      >
        <h2 className='ml-2 font-semibold text-white animate-pulse'>
          Support me in Trakteer
        </h2>
      </button>
    </div>
  );
}

export default Trakteer;
