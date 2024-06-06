import React, { useState } from "react";

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-8  border-b bg-white p-4  dark:bg-dark-2 ">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >


        <div className="w-full">
          <h4 className={`${active ? "mt-1 text-2xl  font-semibold text-dark dark:text-white bg-gradient-to-br from-salmon to-medium-purple inline-block text-transparent bg-clip-text" : "mt-1 text-2xl font-semibold text-black dark:text-white"}`}>
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
        <div className='flex gap-2 items-center bg-gradient-to-br from-salmon to-medium-purple inline-block text-transparent bg-clip-text'>
              <p className='flex items-center'>Learn More</p>
              <img className="w-5" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63ff3b3e4dc16be9322e8817_right%20arrow.svg" alt="Right arrow" />
         </div>
      </div>
    </div>
  );
};

export default AccordionItem;
