import pizza from "../assets/images/pizza.png";
import logo from "../assets/images/logo.png";
import cover from "../assets/images/cover.png";

const Home = () => {
  return (
    <div className="pb-[150px] max-sm:pb-[64px] flex max-lg:flex-col-reverse  max-lg:items-center ">
      <div className=" w-[688px] max-sm:w-[100%] pl-[100px] max-sm:pl-0 pt-[33px] max-sm:pt-0 flex flex-col max-sm:items-center">
        <img
          src={logo}
          alt=""
          className=" w-[107px] h-[83px] object-cover  max-sm:hidden"
        />
        <div className=" w-[345px] max-sm:w-[249px] mt-[111px] max-sm:mt-[63px] max-sm:text-center">
          <h1 className=" text-[62px] max-sm:text-[38px] text-[--secondary-color] leading-[1.1] font-['SansPro-b']">
            Discover the <span className="text-[--primary-color]">Best</span>{" "}
            Food and Drinks
          </h1>
          <p className=" mt-[26px] max-sm:mt-[21px]  mb-[41px] max-sm:mb-[28px] max-sm:[21px] text-[16.44px] max-sm:text-[11px] text-[--gray]  font-['OpenSans']">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
        </div>

        <button className="w-[190px] h-[63px] max-sm:w-[120px] max-sm:h-[40px] rounded-[34px] bg-[--primary-color] font-['OpenSans-b'] text-[18px] max-sm:text-[12.27px] tracking-[0.01em] text-white ease-in-out duration-300 hover:scale-105 active:scale-95">
          Explore Now!
        </button>
      </div>
      <div className=" w-[752px] h-[839px] max-sm:w-[375px] max-sm:h-[446px] relative">
        <img
          src={pizza}
          alt=""
          className="w-[735px] h-[804px] max-sm:w-[375px] max-sm:h-[413px] max-sm:rounded-bl-[102px] rounded-bl-[198.9px] absolute top-0 right-0 object-cover"
        />
        <img
          src={cover}
          alt=""
          className="w-[100%] h-[100%] object-fill absolute top-0 right-0"
        />

        <button className="absolute top-[32px] right-[41px] max-sm:top-[18px] max-sm:right-[18px] w-[122px] h-[42px] max-sm:w-[88px] max-sm:h-[31px] rounded-[34px] border border-white font-['SansPro-sb'] text-[16px] max-sm:text-[11px] text-white ease-in-out duration-300 hover:scale-105 active:scale-95">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
