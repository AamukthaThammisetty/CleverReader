import React from 'react'
import "./home.css"
import { useEffect, useRef, useState } from 'react'
function Home() {
  const [state, setState] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const navRef = useRef()

  const navigation = [
    { title: "Product", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
    { title: "Industry", path: "javascript:void(0)" },
    { title: "Customer Stories", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Blog", path: "javascript:void(0)" }
  ]

  useEffect(() => {
    const body = document.body
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
    if (state) body.classList.add(...customBodyStyle)
    else body.classList.remove(...customBodyStyle)

    const customStyle = ["sticky-nav", "fixed"]
    if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
    else navRef.current.classList.remove(...customStyle)
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [state, prevScrollPos])
  return (

    <div className="bg-[url('https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg')] object-cover">
    <nav ref={navRef} className={`bg-[#151218] bg-opacity-65 w-full top-0 z-20 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <a href="javascript:void(0)">
            <div className='flex items-center justify-center gap-2'>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7e3bea3f1d_Crest%20fevicon.png"
                width={10}
                height={10}
                alt="CleverReader Logo"
                className='w-10'
              />
              <h1 className='text-white text-2xl'>CleverReader</h1>
            </div>
          </a>
          <div className="lg:hidden">
            <button className="text-white outline-none p-2 rounded-md focus:black focus:border"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${state ? 'h-screen pb-20 overflow-auto pr-4 bg-black bg-opacity-70' : 'hidden'}`}>
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <li className="mt-4 lg:mt-0">
                <a href="javascript:void(0)" className="py-3 px-4 font-bold text-center border transition-colors duration-700 hover:transition-colors hover:duration-700 bg-gradient-to-br from-salmon to-medium-purple inline-block text-transparent bg-clip-text hover:text-white rounded-md block lg:inline lg:border-0">
                  Login
                </a>
              </li>
              <li className="mt-8 rounded-2xl lg:mt-0">
                <a href="javascript:void(0)" className="py-3 px-5 text-center text-white bg-gradient-to-br from-salmon to-medium-purple hover:text-black hover:bg-gradient-to-r from-salmon to-medium-purple rounded-full shadow block lg:inline">
                  Talk To Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {
                navigation.map((item, idx) => {
                  return (
                    <li key={idx} className="text-white hover:text-[#fc907e]">
                      <a href={item.path}>
                        {item.title}
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <section class="home">
                    <div className="flex justify-between   mx-auto  pl-32 py-28  text-white  overflow-hidden lgpx-8 lg:flex">
                        <div className='flex-none pt-10 space-y-5 max-w-xl'>
                          <div className="text-6xl text-white font-bold sm:text-6xl">
                              <p className="text-6xl text-white pb-5 font-bold sm:text-6xl">
                                Every order 
                              </p>
                              <p>
                                fulfilled,<span className='bg-gradient-to-br from-salmon to-medium-purple inline-block text-transparent bg-clip-text ' >on time.</span> 
                              </p>
                            </div>
                            <p className='font-bold pb-7 pt-6'>
                            Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.                            </p>
                            <div className='flex items-start gap-x-3 sm:text-sm'>
                            <a href="#_" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all duration-300 bg-black rounded-full group">
                              <span class="absolute inset-0  group-hover:border-[25px] ease-linear duration-300 transition-all rounded-full"></span>
                              <span class="relative w-full text-left text-transparent bg-clip-text bg-gradient-to-r from-salmon to-medium-purple transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                Get started with Crest
                              </span>
                              <span class="absolute inset-0 w-full h-full transition-opacity duration-300 bg-gradient-to-r from-salmon to-medium-purple opacity-0 group-hover:opacity-100 rounded-full z-0"></span>
                              <span class="absolute inset-0 rounded-full border border-3 border-white"></span>
                            </a>

                                <img className="mt-3" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg"></img>
                            </div>
                        </div>
                        <div className="flex-1 justify-end  flex lg:ml-auto">
                          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" className="max-w-full" />
                        </div>                       
                    </div>
                </section>
    </div>
  )
}

export default Home
