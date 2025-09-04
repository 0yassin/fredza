import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins text-xl min-h-screen min-w-screen flex flex-col gap-32 items-center flex-nowrap bg-white px-16">
       {/* section one */}
       <nav className="w-full bg-red-200 py-4 flex justify-between">
          <a className="self-center font-normal text-black/90 text-2xl">logo</a>
          <a className="border-1 border-black/60 py-4 px-9 rounded-full text-[15px] text-black/90 font-normal">contact us</a>
       </nav>


      <section className="flex flex-col items-center text-black/90 w-full max-w-[900px]">
        {/* headline and button */}
        <div className="flex flex-row justify-between w-full">
          <div>
            <h1 className="text-5xl font-medium text-black/90 mb-4">Fredza Agency</h1>
            <p className="text-3xl font-normal text-black/70">Professional branding and marketing.</p>
          </div>
          <a className="border-1 h-fit w-fit self-center border-black/60 py-5 px-12 rounded-full text-[26px] text-black/90 font-normal">Book a call</a>
        </div>


        {/* image grid */}
        <div>
          {/* aaa */}
        </div>
      </section>
    </div>
  );
}
