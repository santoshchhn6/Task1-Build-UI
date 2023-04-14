import spoon from "../assets/images/spoon.png";

const AboutUs = () => {
  return (
    <div className="h-[467px] bg-[--light] flex justify-evenly items-center">
      <img src={spoon} alt="" className="w-[384px] h-[467px] object-cover" />
      <div className="w-[447px] h-[fit-content]">
        <h2 className="text-[--secondary-color] text-[45px] font-['Poppin-sb']">
          About Us
        </h2>
        <p className="text-[--gray] text-[15px] font-['OpenSans'] mb-[24px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="w-[132px] h-[42px] rounded-[21px] bg-[--primary-color] font-['SansPro-sb'] text-[16px] text-white ease-in-out duration-300 hover:scale-105 active:scale-95">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
