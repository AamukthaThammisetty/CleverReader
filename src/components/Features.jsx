import React from 'react'
import Faqs from './Faqs'
import { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import AccordionItem from './AccordionItem'

function Features(props) {
  return (
    <div className="pt-20">
      <div>
        <h1 className="flex justify-center text-4xl font-bold pt-5">Things your spreadsheet wishes it could do</h1>
      </div>
      <section className="home">
        <div className="flex justify-between mx-auto pl-32 py-28 text-[#000000]  lg:pl-8 lg:flex">
          <section className="relative z-20 overflow-hidden flex-1 bg-white pb-12  dark:bg-dark lg:pb-[90px] lg:pl-[80px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4"></div>
              </div>
              <div className="-mx-4 flex flex-col ">
                <div className="w-full px-4 lg:w-[550px]">
                  <AccordionItem
                    key="faq1"
                    header="Accurate Demand Forecasting"
                    text="Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions."
                  />
                  <AccordionItem
                    key="faq2"
                    header="HELIX: Workflow Automation"
                    text="Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can."
                  />
                  <AccordionItem
                    key="faq3"
                    header="Automated Purchase Planning"
                    text="Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer."
                  />
                </div>
                <div className="w-full px-4 lg:w-[550px]">
                  <AccordionItem
                    key="faq4"
                    header="Automated Distribution Planning"
                    text="Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory."
                  />
                  <AccordionItem
                    key="faq5"
                    header="Easy Integration"
                    text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available."
                  />
                  <AccordionItem
                    key="faq6"
                    header="Custom Dashboards"
                    text="Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended"
                  />
                  <AccordionItem
                    key="faq6"
                    header="Consensus Planning"
                    text="Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="flex-1 pl-5 rounded-l-3xl border w-[850px] h-[750px] py-36 justify-end bg-gradient-to-r from-salmon to-medium-purple flex lg:ml-auto">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp" className="w-[800px] h-[450px]" alt="Demand Forecasting" />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <a
          href="#_"
          className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all duration-300 bg-white border-2 border-[#f1e9fc] rounded-full group"
        >
          <span className="absolute inset-0 group-hover:border-[25px] ease-linear duration-300 transition-all rounded-full"></span>
          <span className="relative w-full text-left text-transparent bg-clip-text bg-gradient-to-r from-salmon to-medium-purple transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            View All Features
          </span>
          <span className="absolute inset-0 w-full h-full transition-opacity duration-300 bg-gradient-to-r from-salmon to-medium-purple opacity-0 group-hover:opacity-100 rounded-full z-0"></span>
          <span className="absolute inset-0 rounded-full border border-3 border-white"></span>
        </a>
      </div>
    </div>
  )
}

export default Features
