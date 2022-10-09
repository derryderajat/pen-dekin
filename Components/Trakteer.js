import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TrakteerIcon from '../public/Trakteer.png';
function Trakteer() {
  const router = useRouter();

  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-white mb-4'>
        Help me buy a Coffee:
      </h1>
      <div
        className='relative w-36 h-12 hover:cursor-pointer'
        onClick={(e) => router.push('https://trakteer.id/derryderajat/tip')}
      >
        <Image src={TrakteerIcon} alt='trakteer' layout='fill' />
      </div>
    </div>
  );
}

export default Trakteer;
