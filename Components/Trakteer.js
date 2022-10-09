import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
        <Image
          src='https://cdn.trakteer.id/images/embed/trbtn-red-1.png'
          alt='trakteer'
          layout='fill'
          priority
        />
      </div>
    </div>
  );
}

export default Trakteer;
