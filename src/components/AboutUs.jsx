import spoon from "../assets/images/spoon.png";

const AboutUs = () => {
  return (
    <div className="bg-[--light] flex justify-evenly items-center max-lg:flex-col max-lg:justify-center">
      <img
        src={spoon}
        alt=""
        className="w-[384px] h-[467px] max-lg:w-[100%] object-cover max-sm:hidden"
      />
      <div className=" w-[447px] h-[467px] max-sm:w-[275px] max-sm:h-[516px] flex flex-col justify-center max-sm:items-center max-sm:text-center">
        <h2 className="text-[--secondary-color] text-[45px] max-sm:text-[26px] font-['Poppin-sb']">
          About Us
        </h2>
        <p className="text-[--gray] text-[15px] max-sm:text-[11px] font-['OpenSans'] mb-[24px] max-sm:mt-[21px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="w-[132px] h-[42px] max-sm:w-[96px] max-sm:h-[25px] rounded-[21px] bg-[--primary-color] font-['SansPro-sb'] text-[16px] max-sm:text-[11px] text-white ease-in-out duration-300 hover:scale-105 active:scale-95">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
