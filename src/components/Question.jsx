import { RiTodoLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";

const integrations = [
  {
      title: "What to order",
      desc: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
      imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg",
          
         

  }, {
      title: "When to order",
      desc: "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
      imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"

  }, {
      title: "How much to stock",
      desc: "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
      imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg",

  },{
    title: "Where to place",
    desc: "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
    imgSrc:"https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"

}
]

const Header=() => (
  <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-2 md:px-8">
          <div className=" flex justify-center ">
              <h1 className="text-black text-3xl pb-6 flex justify-center font-extrabold sm:text-4xl">Four key questions answered by Crest</h1>
             
          </div>
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {
                  integrations.map((item, idx) => (
                      <li className=" bg-[#f1e9fc] rounded-3xl">
                          <div className="flex items-start justify-between p-4">
                              <div className="  p-4 space-y-2">
                                  <img src={item.imgSrc} className="w-12 pb-2"/>
                                  <h4 className="text-black text-2xl font-bold ">{item.title}</h4>
                                  <p className="text-black text-md">{item.desc}</p>
                              </div>
                              
                          </div>
                          
                      </li>
                  ))
              }
          </ul>
      </div>
  </section>
)

export default Header;
