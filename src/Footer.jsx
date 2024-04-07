function Footer() {
  return (
    <footer className="max-w-[1300px]">
      <div className="flex  mt-[140px] items-center justify-between ">
        <h1 className="text-white w-[457px] text-[46px] font-[700px]">
          7+ years experience working
        </h1>
        <div className="text-white ">
          <span className="">
            <h1 className="text-[#079211] text-[25px] w-[360px] mb-[10px]">
              Services
            </h1>
            <p className="w-[360px] text-[16px] text-[#808080]">
              Discover the best services I offer, designed to ensure the success
              of your project.
            </p>
          </span>
        </div>
      </div>

      <ul className="mt-[90px] flex gap-[20px]">
        <li className="text-white bg-[#313131] w-[360px] h-[342px]">
          <div className="pt-[68px] ml-[25px] ">
            <img src="./icon-1.png" alt="" className="mb-[46px]" />

            <span>
              <h1 className="text-[26px] mb-[18px] font-[700]">
                Product design
              </h1>
              <p className="font-400 text-[#808080] text-[16px]">
                I offer innovative and attention-grabbing product design
                services. From initial ideation to implementation.
              </p>
            </span>
          </div>
          <div className="w-[360px] h-[6px] bg-[#079211] mt-[49px]"></div>
        </li>
        <li className="text-white bg-[#313131] w-[360px] h-[342px]">
          <div className="pt-[68px] ml-[25px] ">
            <img src="./icon-2.png" alt="" className="mb-[46px]" />

            <span>
              <h1 className="text-[26px] mb-[18px] font-[700]">
                Frontend develop
              </h1>
              <p className="font-400 text-[#808080] text-[16px]">
                Specialize in responsive and interactive front-end development.
                With a deep understanding of HTML, CSS, and JS.
              </p>
            </span>
          </div>
          <div className="w-[360px] h-[6px] bg-[#079211] mt-[49px]"></div>
        </li>
        <li className="text-white bg-[#313131] w-[360px] h-[342px]">
          <div className="pt-[68px] ml-[25px] ">
            <img src="./icon-1.png" alt="" className="mb-[46px]" />

            <span>
              <h1 className="text-[26px] mb-[18px] font-[700]">
                Brand strategy
              </h1>
              <p className="font-400 text-[#808080] text-[16px]">
              I help design strong and captivating brand strategies. Through thorough research and market analysis.
              </p>
            </span>
          </div>
          <div className="w-[360px] h-[6px] bg-[#079211] mt-[49px]"></div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
