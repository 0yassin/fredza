import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins text-xl min-h-screen flex flex-col gap-16 items-center bg-white px-6 sm:px-10 md:px-16">

      {/* navbar */}
      <nav className="w-full py-4 flex justify-between items-center">
        <a className="font-normal text-black/90 text-xl sm:text-2xl">logo</a>
        <button className="border-1 relative group inline-flex border-black/60 py-2 sm:py-4 px-6 sm:px-9 rounded-full text-sm sm:text-[15px] text-black/90 font-normal cursor-pointer">
          <span className="group-hover:-translate-x-3 transition-all">contact us</span>
          <img
            src={"/downarrow.svg"}
            className="absolute -rotate-90 right-4 sm:right-6 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all w-3 sm:w-4 self-center"
          />
        </button>
      </nav>

      {/* section one */}
      <section className="flex flex-col items-center text-black/90 w-full max-w-[950px] gap-8 sm:gap-12">
        {/* headline and button */}
        <div className="flex flex-col lg:flex-row justify-around items-start px-4 sm:px-0 lg:items-center gap-6 w-full">
          <div>
            <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 w-fit">
              Fredza Agency
            </h1>
            <p className="text-lg sm:text-[25px] text-black/85 w-fit">
              Professional branding and marketing.
            </p>
          </div>

          <button className="border-1 group h-fit w-fit relative border-black/60 py-3 sm:py-4 px-8 sm:px-9 rounded-full text-[15px] lg:py-5 lg:px-12 lg:text-[25px] text-black/90 font-normal cursor-pointer inline-flex">
            <span className="group-hover:-translate-x-4 transition-all">book a call</span>
            <img
              src={"/downarrow.svg"}
              className="inline-block w-5 sm:w-6 self-center absolute right-4 sm:right-6 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 -rotate-90"
            />
          </button>
        </div>

        {/* image grid */}
        <div className="grid grid-cols-2  md:grid-cols-5 grid-rows-2 md:grid-rows-2 w-full h-full p-4 sm:p-8 md:p-16 sm:pt-4 md:pt-4 pt-4 gap-3">
          <div className="col-span-2 md:col-span-3">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl" />
          </div>

          <div className="col-span-1 md:col-span-2">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl aspect-square" />
          </div>

          <div className="col-span-2 md:col-span-3 hidden md:flex font-normal text-[35px] md:text-[40px]s text-black/95  items-center">
            <p>We help brands and businesses achieve online presence</p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-2xl aspect-square" />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="flex flex-col sm:flex-row gap-3 w-full px-0 sm:px-4 lg:px-16 justify-center max-w-[950px]">
        {[
          { number: "300+", label: "Clients" },
          { number: "4.1", label: "rating" },
          { number: "5+", label: "YOE" },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 border-[1px] border-black/70 py-8 sm:py-12 flex-1 items-center justify-center rounded-xl"
          >
            <h1 className="text-2xl sm:text-[30px] text-black/90 text-center font-medium">
              {stat.number}
            </h1>
            <h1 className="text-base sm:text-[19px] text-black/90 text-center mt-1 sm:mt-2">
              {stat.label}
            </h1>
          </div>
        ))}
      </section>

      {/* section 3 */}
      <section className="w-full mt-16 max-w-[950px] px-4 sm:px-0">
        <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 mb-6 sm:mb-8 w-fit">
          Our services
        </h1>
        <div className="w-full py-2 px-2 rounded-2xl border-[1.5px] border-black/70 flex flex-wrap gap-2 sm:gap-2">
          {["Branding", "Marketing", "Design", "Strategy"].map((srv, i) => (
            <div key={i} className="bg-[#303030] py-10 sm:py-16 px-6 sm:px-12 rounded-[8px] flex flex-1 justify-center min-w-[140px]">
              <span className="text-lg sm:text-[25px] font-normal text-white">
                {srv}
              </span>
            </div>
          ))}
          <img src={"/downarrow.svg"} className="w-8 hidden md:block mr-2 -rotate-90 self-center" />
        </div>
      </section>

      {/* section 4 */}
      <section className="w-full mt-16 max-w-[950px] px-4 sm:px-0">
        <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 mb-2 w-fit">
          About us
        </h1>
        <p className="text-lg sm:text-[25px] text-black/75 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* section 5 */}
      <section className="w-full mt-8 max-w-[950px] mb-16 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 w-fit mb-6 sm:mb-12">
          Recent Projects
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-[700px] mx-auto">
          <div className="col-span-2 sm:col-span-2">
            <img src={"/image 1.png"} className="object-cover w-full h-full rounded-xl" />
          </div>
          <div>
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="col-span-2 sm:col-span-2">
            <img src={"/image 1.png"} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section className="mb-32 sm:mb-64 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-[40px] font-medium text-black/90 mb-6 sm:mb-8 text-center">
          Level up your brand right now
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="border-1 relative group inline-flex border-black/60 py-3 mx-auto sm:mx-0 sm:py-4 px-7 sm:px-9 rounded-full text-base sm:text-[20px] text-black/90 font-normal cursor-pointer">
            <span className="group-hover:-translate-x-3 transition-all">contact us</span>
            <img
              src={"/downarrow.svg"}
              className="absolute -rotate-90 right-5 sm:right-6 translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all w-3 sm:w-4 self-center"
            />
          </button>
          <button className="border-1 relative group inline-flex bg-black/85 py-3 mx-auto sm:mx-0 sm:py-4 px-7 sm:px-9 rounded-md text-base sm:text-[20px] font-normal cursor-pointer">
            <span className="group-hover:-translate-y-2 transition-all text-white">
              contact us
            </span>
          </button>
        </div>
      </section>

    </div>
  );
}
