import React, { useState, useRef, useEffect } from 'react';

const Statistics = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3'
  ];

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
    const position = Math.round((scrollTop / scrollHeight) * (images.length - 1));
    setScrollPosition(position);
  };

  useEffect(() => {
    const div = scrollRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="flex h-screen">
      <div className="relative w-20 h-full overflow-y-scroll no-scrollbar" ref={scrollRef}>
        <div className="h-[300%] relative flex flex-col items-center justify-between">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mb-4 transition-transform duration-300 ${scrollPosition === idx ? 'bg-blue-500 scale-125' : ''}`}
              style={{ top: `${idx * 100 / (images.length - 1)}%`, transform: `translateY(-${scrollPosition * 100 / (images.length - 1)}%)` }}
            >
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <img src={image} alt={`Circle Image ${idx + 1}`} className="w-5 h-5 rounded-full" />
              </div>
            </div>
          ))}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <img src={images[scrollPosition]} alt={`Scroll Image ${scrollPosition + 1}`} className="max-w-full max-h-full" />
      </div>
    </section>
  );
};

export default Statistics;
