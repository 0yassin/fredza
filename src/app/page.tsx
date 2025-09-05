import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins text-xl min-h-screen min-w-screen flex flex-col gap-32 items-center flex-nowrap bg-white px-16">

       <nav className="w-full bg-red-200 py-4 flex justify-between">
          <a className="self-center font-normal text-black/90 text-2xl">logo</a>
          <a className="border-1 border-black/60 py-4 px-9 rounded-full text-[15px] text-black/90 font-normal">contact us</a>
       </nav>


       {/* section one */}
      <section className="flex flex-col items-center text-black/90 w-full max-w-[950px]">
        {/* headline and button */}
        <div className="flex flex-row justify-around gap-32 w-full">
          <div>
            <h1 className="text-[40px] font-medium text-black/100 ">Fredza Agency</h1>
            <p className="text-[25px] text-black/95">Professional branding and marketing.</p>
          </div>
          <a className="border-1 h-fit w-fit self-center  border-black/60 py-5 px-12 rounded-full text-[25px] text-black/90 font-normal">book a call</a>
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
          <div className="col-span-3 font-normal text-[42px] text-black/95  flex items-center">
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
      <section className="flex flex-col gap-4 ">

      </section>
    </div>
  );
}
