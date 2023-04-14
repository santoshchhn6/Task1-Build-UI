import pizza from "../assets/images/pizza.png";
import logo from "../assets/images/logo.png";
import Cover from "../svg/Cover";

const Home = () => {
  return (
    <div className="h-[989px] flex ">
      <div className="w-[688px] pl-[100px] pt-[33px]">
        <img src={logo} alt="" className=" w-[107px] h-[83px] object-cover " />
        <div className="w-[345px] mt-[111px]">
          <h1 className="h-[207px] text-[62px] text-[--secondary-color] leading-[1.1] font-['SansPro-b']">
            Discover the <span className="text-[--primary-color]">Best</span>{" "}
            Food and Drinks
          </h1>
          <p className=" mt-[26px] mb-[41px] text-[16.44px] text-[--gray]  font-['OpenSans']">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
        </div>

        <button className="w-[190px] h-[63px] rounded-[34px] bg-[--primary-color] font-['OpenSans-b'] text-[18px] tracking-[0.01em] text-white ease-in-out duration-300 hover:scale-105 active:scale-95">
          Explore Now!
        </button>
      </div>
      <div className="w-[752px] relative">
        <img
          src={pizza}
          alt=""
          className="w-[735px] h-[804px] rounded-bl-[198.9px] absolute top-0 right-0"
        />

        <Cover />
        <button className="absolute top-[32px] right-[41px] w-[122px] h-[42px] rounded-[34px] border border-white bg-[#E23744] font-['SansPro-sb'] text-[16px] text-white ease-in-out duration-300 hover:scale-105 active:scale-95">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
