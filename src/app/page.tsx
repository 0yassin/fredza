import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins text-xl min-h-screen min-w-screen flex flex-col gap-16 items-center flex-nowrap bg-white px-16">

       <nav className="w-full py-4 flex justify-between">
          <a className="self-center font-normal text-black/90 text-2xl">logo</a>
          <button className="border-1 relative group inline-flex border-black/60 py-4 px-9 rounded-full text-[15px] text-black/90 font-normal cursor-pointer">
            <span className="group-hover:-translate-x-3 transition-all">contact us</span>
            <img src={"/downarrow.svg"} className="absolute -rotate-90 right-6 translate-x-3 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all w-4 inline-block self-center"/>
          </button>
       </nav>


       {/* section one */}
      <section className="flex flex-col items-center text-black/90 w-full max-w-[950px]">
        {/* headline and button */}
        <div className="flex flex-row justify-around w-full">
          <div>
            <h1 className="text-[40px] font-medium text-black/100 ">Fredza Agency</h1>
            <p className="text-[25px] text-black/95">Professional branding and marketing.</p>
          </div>
          
          <button className="border-1 group h-fit w-fit self-center relative  border-black/60 py-5 px-12 rounded-full text-[25px] text-black/90 font-normal cursor-pointer inline-flex">
            <span className="group-hover:-translate-x-4 transition-all">book a call</span>
            <img src={"/downarrow.svg"} className="inline-block w-6 self-center absolute right-6 translate-x-4 opacity-0 transition-all group-hover:translate-0 group-hover:opacity-100 -rotate-90"/>
          </button>
          {/* <a className="border-1 h-fit w-fit self-center  border-black/60 py-5 px-12 rounded-full text-[25px] text-black/90 font-normal">book a call</a> */}
        </div>


        {/* image grid */}
        <div className="grid grid-cols-5 grid-rows-2 w-full h-full p-16 gap-3 ">
          {/* image 1 */}
          <div className="col-span-3 row-span-1">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl"></img>
          </div>

          {/* image 2 */}
          <div className="col-span-2">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl aspect-square"></img>
          </div>

          {/* text */}
          <div className="col-span-3 font-normal text-[40px] text-black/95  flex items-center">
            <p className="self-cente">
              We help brands and businesses achieve online presence 
            </p>
          </div>

          {/* image 3 */}
          <div className="col-span-2">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl aspect-square"></img>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="flex gap-3 w-full px-16 justify-center max-w-[950px]">
        <div className="flex flex-col gap-2 border-[1px] border-black/70 py-12 flex-1 items-center justify-center rounded-xl">
          <div>
            <h1 className="text-[30px] text-black/90 text-center font-medium">300+</h1>
            <h1 className="text-[19px] text-black/90 text-center mt-2">Clients</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2  border-[1px] border-black/70 py-12 flex-1 items-center justify-center rounded-xl">
          <div>
            <h1 className="text-[30px] text-black/90 text-center font-medium">4.1</h1>
            <h1 className="text-[19px] text-black/90 text-center mt-2">rating</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-[1px] border-black/70 py-12 flex-1 items-center justify-center rounded-xl">
          <div>
            <h1 className="text-[30px] text-black/90 text-center font-medium">5+</h1>
            <h1 className="text-[19px] text-black/90 text-center mt-2">YOE</h1>
          </div>
        </div>

      </section>

      {/* section 3 */}
      <section className="w-full mt-16 max-w-[950px]">
      <h1 className="text-[40px] font-medium text-black/100 mb-8 w-fit">
        Our services
      </h1>
      <div className="w-fit py-2 px-2 rounded-2xl border-[1.5px] border-black/70 flex gap-2 mx-auto">

        <div className="bg-[#303030] py-16 px-16 rounded-[8px] flex justify-center">
          <span className="text-[25px] font-normal text-white">Branding</span>
        </div>
        <div className="bg-[#303030] py-16 px-16 rounded-[8px] flex justify-center">
          <span className="text-[25px] font-normal text-white">Branding</span>
        </div>
        <div className="bg-[#303030] py-16 px-16 rounded-[8px] flex justify-center">
          <span className="text-[25px] font-normal text-white">Branding</span>
        </div>
        <img src={"/downarrow.svg"} className="w-10 mr-2 -rotate-90"></img>

      </div>
      </section>

      {/* section 4 */}
      <section className="w-full mt-16 max-w-[950px]">
      <h1 className="text-[40px] font-medium text-black/100 mb-2 w-fit">
        About us
      </h1>
      <p className="text-[25px] text-black/90">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
et dolore magna aliqua. 
      </p>
      </section>

      {/* section 5 */}
      <section className="w-full mt-8 max-w-[950px] mb-32">
      <h1 className="text-[40px] font-medium text-black/100 w-fit mb-12">
        Recent Projects
      </h1>

      {/* image grid */}
      <div className="grid grid-cols-3 grid-rows-1 max-w-[700px] gap-2 mx-auto">

        <div className="col-span-2 row-span-1">
          <img src={"/image 1.png"} className="object-cover w-full h-full"></img>
        </div>

        <div className="col-span-1 row-span-1">
          <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl object-left"/>
        </div>

        <div className="col-span-1 row-span-1">
          <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl object-left"/>
        </div>

        <div className="col-span-2 row-span-1">
          <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl object-left"/>
        </div>
      </div>
      </section>

    </div>
  );
}
