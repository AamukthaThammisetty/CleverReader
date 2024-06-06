import React from 'react'

function Founder() {
  return (
    <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between md:flex md:px-8">
                <div className="relative border mt-14  md:mt-0 md:max-w-xl">
                      <img
                        src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64df240c8d5e1c29b06d3a95_Founders%20Photo-p-800.webp"
                        className="md:rounded-[20px] z-5 w-full"
                        alt=""
                      />
                      <div className="absolute z-10 -bottom-10 -right-10  bg-[#f1e9fc] text-black rounded-3xl flex flex-col items-center justify-center h-32 w-96">
                        <p>Rahul Vishwakarma, Akhil Kumar & Yogesh</p>
                        <p className="pr-44">Byahatti - Founders</p>
                      </div>
                </div>
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className="text-4xl text-black font-bold md:text-5xl">
                            From the founders
                        </h2>
                        <p className='text-black pb-2'>
                          We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster. Our background, tech expertise, and empathy allow us to do just that. 
                        </p>
                        <p className='text-black pb-2'>
                          Thank you for checking out Crest, and we hope to help you always be in stock!
                        </p>
                        <a href="#_" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all duration-300 bg-white  border-2 border-[#f1e9fc]  rounded-full group">
                              <span class="absolute inset-0  group-hover:border-[25px] ease-linear duration-300 transition-all rounded-full"></span>
                              <span class="relative w-full text-left text-transparent bg-clip-text bg-gradient-to-r from-salmon to-medium-purple transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                    Learn More
                              </span>
                              <span class="absolute inset-0 w-full h-full transition-opacity duration-300 bg-gradient-to-r from-salmon to-medium-purple opacity-0 group-hover:opacity-100 rounded-full z-0"></span>
                              <span class="absolute inset-0 rounded-full border border-3 border-white"></span>
                            </a>
                        
                    </div>
                </div>
      </section>
  )
}

export default Founder
