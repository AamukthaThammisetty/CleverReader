import React, { useState } from 'react';

function Advantages() {
  const items = [
    { id: 1, heading: 'A Focus on KPIs that matter', text: 'Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.', bgColor: 'white', imageSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg' },
    { id: 2, heading: 'Ease of use, for everyone', text: 'With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.', bgColor: 'white', imageSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg' },
    { id: 3, heading: 'Purpose-built & ever-improving tech', text: 'Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving.', bgColor: 'white', imageSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="pt-20 mt-20 pb-20 bg-[#f2f2f2] bg-no-repeat object-cover bg-[url('https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d12c8ea3f15_slider-bg.svg')]">
      <h1 className='flex items-center justify-center font-bold text-4xl pb-10'>Get Crest and get..</h1>
      <div className="relative mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="relative overflow-hidden w-full h-[600px] bg-white rounded-lg">
          <div className="absolute top-0 bottom-0 start-0 end-0 flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {items.map(item => (
              <div key={item.id} className="flex-shrink-0 w-full h-full">
                <div className={`flex gap-18 h-full ${item.bgColor} p-6`}>
                  <img src={item.imageSrc} alt={item.text} className="h-[500px] pl-20  w-[500px] object-contain mr-4" />
                  <div className='flex flex-col items-start justify-center'>
                    <h2 className="text-3xl font-bold mb-2">{item.heading}</h2>
                    <span className="text-lg text-gray-800 transition duration-700">{item.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button type="button" onClick={prevSlide} className="absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg">
          <span className="text-2xl" aria-hidden="true">
            <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button type="button" onClick={nextSlide} className="absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg">
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          {items.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer rounded-full border border-gray-400 w-3 h-3 ${index === currentIndex ? 'bg-blue-700 border-blue-700' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
