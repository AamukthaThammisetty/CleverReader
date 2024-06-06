import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaArrowRight } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
function Partners() {
 
  const row=[
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb55980929236adb436a_dlight.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958f53ea35cd012178e_DILIP%20SONIGARA.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d19ebc9f547ee13d1_aroka.svg",
   
  ]
  return (
    <div>
      <Marquee>
        <div className='gap-20 py-12 flex '>
          {
        row.map((item, idx) => (
                  <img className='w-40' src={item}/>     
          ))
        }
      
      </div>
      </Marquee>
      <section className='flex gap-10 px-32'>
        <div>
          <p className='text-lg pb-24'>
            D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
          </p>
          <div className='flex pb-24'>
            <div>
              <img className="rounded-full w-16  flex items-center" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"/>
            </div>
            <div>
                <h3 className='text-xl font-bold pl-3 pr-80 pt-1 pb-1'>Diksha Pandey</h3>
                <p className='pl-3 pr-80'> Co-founder,Samosa Party</p>
            </div>
            <div>
              <img className="rounded-full w-20   flex items-center" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg"/>
            </div>
          </div>
          <div className='flex gap-10'>
            <div className=' flex flex-col px-5 py-5 justify-center items-center rounded-lg   bg-[#f1e9fc]'>
              <h2 className='text-4xl bg-gradient-to-br from-salmon to-medium-purple inline-block text-transparent bg-clip-text pb-2 font-bold text-'>upto 95%</h2>
              <p className='flex justify-center'>Demand Fulfillment</p>
            </div>
            <div className='rounded-lg flex-col pb-7 px-10 justify-center items-center bg-[#f1e9fc]'>
                <h2 className='text-4xl bg-gradient-to-br from-salmon to-medium-purple inline-block text-transparent bg-clip-text pb-2 font-bold text-'><FaLessThan />3%</h2>
                <p className='flex justify-center'>Daily Stock-out</p>
            </div>
            <div className='rounded-lg flex flex-col justify-center items-center px-10 bg-[#f1e9fc]'>
             <p className='bg-gradient-to-br text-xl from-salmon to-medium-purple inline-block text-transparent bg-clip-text'> Read Story <FaArrowRight /></p>
            </div>
          </div>
        </div>
        <div className="w-[2000px] h-96 rounded-3xl">
            <img className="object-cover h-[600px] rounded-lg border-medium-purple border" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp"/>
        </div>

      </section>
    </div>
  )
}

export default Partners
