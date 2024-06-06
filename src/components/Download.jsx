import React from 'react';

function Download() {
  const gradientAnimation = `
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <section className='bg-black flex py-96 items-center justify-center h-96'>
      <style>
        {gradientAnimation}
      </style>
      <div className='text-white w-[1200px]  rounded-lg flex flex-col items-center justify-center bg-gradient-to-br from-salmon to-medium-purple'
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient 5s ease-in-out infinite'
        }}
      >
        <h1 className='text-5xl pb-20 pt-32 font-semibold'>You can grow faster than you think!</h1>
        <p>
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and
        </p>
        <p className='pb-16'>technologies of large global companies to help brands of all sizes scale.</p>
        <div className='rounded-full pb-20'>
          <p className='text-white rounded-full py-3 px-4 bg-black'>Get Started with Crest</p>
        </div>
      </div>
    </section>
  );
}

export default Download;
