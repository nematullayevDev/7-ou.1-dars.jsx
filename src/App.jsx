import Count from "./Count";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container w-[1150px] mt-[18px] mb-[100px] flex flex-col ml-auto mr-auto ">
        <header className="flex items-center">
          <span className="text-white font-bold text-[24px] mr-[492px]">
            Alifreza.
          </span>

          <nav className="gap=[10px]">
            <ul className="text-white flex gap-[33px]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <button className="text-white ml-[58px] border-[1px] pr-[16px] pl-[16px] py-[10px]    border-[#078221]">
            Content
          </button>
        </header>
        <Count />
        <Footer />
      </div>
    </>
  );
}

export default App;
