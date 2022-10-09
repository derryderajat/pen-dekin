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
      <div className='bg-[#be1e2d] rounded-md hover:cursor-pointer w-fit h-fit px-4 py-2 flex flex-row items-center'>
        <div
          className='relative h-6 w-4 animate-pulse'
          onClick={(e) => router.push('https://trakteer.id/derryderajat/tip')}
        >
          <Image src={TrakteerIcon} alt='trakteer' layout='fill' />
        </div>
        <h2 className='ml-2 font-semibold text-white'>
          Support me in Trakteer
        </h2>
      </div>
    </div>
  );
}

export default Trakteer;
