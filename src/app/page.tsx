import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins text-xl min-h-screen min-w-screen flex flex-col gap-16 items-center flex-nowrap bg-white px-16">

       <nav className="w-full bg-red-200 py-4 flex justify-between">
          <a className="self-center font-normal text-black/90 text-2xl">logo</a>
          <button className="border-1 relative group inline-flex border-black/60 py-4 px-9 rounded-full text-[15px] text-black/90 font-normal cursor-pointer">
            <span className="group-hover:-translate-x-3 transition-all">contact us</span>
            <span className="absolute right-6 translate-x-3 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all">A</span>
          </button>
       </nav>


       {/* section one */}
      <section className="flex flex-col items-center text-black/90 w-full max-w-[950px]">
        {/* headline and button */}
        <div className="flex flex-row justify-around gap-32 w-full">
          <div>
            <h1 className="text-[40px] font-medium text-black/100 ">Fredza Agency</h1>
            <p className="text-[25px] text-black/95">Professional branding and marketing.</p>
          </div>
          
          <button className="border-1 group h-fit w-fit self-center relative  border-black/60 py-5 px-12 rounded-full text-[25px] text-black/90 font-normal cursor-pointer inline-flex">
            <span className="group-hover:-translate-x-4 transition-all">book a call</span>
            <span className="absolute right-6 translate-x-4 opacity-0 transition-all group-hover:translate-0 group-hover:opacity-100">A</span>
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
        <div className="flex flex-col gap-2 bg-[#F7F7F7] border-[1px] border-black/70 py-14 flex-1 items-center justify-center rounded-xl">
          <div>
            <h1 className="text-[40px] text-black/90 text-center font-medium">300+</h1>
            <h1 className="text-[20px] text-black/90 text-center mt-2">Clients</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#F7F7F7] border-[1px] border-black/70 py-14 flex-1 items-center justify-center rounded-xl">
          <div>
            <h1 className="text-[40px] text-black/90 text-center font-medium">4.1</h1>
            <h1 className="text-[20px] text-black/90 text-center mt-2">rating</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#F7F7F7] border-[1px] border-black/70 py-14 flex-1 items-center justify-center rounded-xl">
          <div>
            <h1 className="text-[40px] text-black/90 text-center font-medium">5+</h1>
            <h1 className="text-[20px] text-black/90 text-center mt-2">YOE</h1>
          </div>
        </div>

      </section>
      <section className="mt-28 mb-32"></section>
    </div>
  );
}
