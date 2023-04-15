import logo from "../assets/images/logo.png";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";

const Footer = () => {
  const headingStyle =
    "font-['SansPro-sb'] text-[18.84px] max-sm:text-[15.77px] text-[--secondary-color]";
  const textFontStyle =
    "text-[--gray4] text-[14.66px] max-sm:text-[8.76px] font-['SansPro']";

  return (
    <div className=" bg-[--light2]  pt-[84px] pb-[92px] max-sm:pt-[52px] max-sm:pb-[107px] flex justify-around max-sm:flex-col max-sm:items-center">
      <img
        src={logo}
        alt=""
        className="w-[161px] h-[125px] max-sm:w-[75px] max-sm:h-[58px] object-cover mt-[39px] max-sm:mt-0"
      />

      <div className=" w-[232px] h-[186px] max-sm:w-[294px] max-sm:h-[116px] max-sm:mt-[42px] flex flex-col justify-between">
        <h3 className={`${headingStyle}`}>Contact Us</h3>
        <p className={`${textFontStyle}`}>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className={`${textFontStyle}`}>example2020@gmail.com</p>
        <p className={`${textFontStyle}`}>(904) 443-0343</p>
      </div>

      <div className=" w-[483px] h-[186px] max-sm:w-[294px] max-sm:mt-[29px]  max-lg:w-[250px] flex justify-between max-sm:flex-col">
        <div className=" w-[232px] max-sm:w-[87px] max-sm:h-[129px]   flex flex-col justify-between">
          <h3 className={`${headingStyle}`}>More</h3>
          <ul
            className={`${textFontStyle} h-[160px] flex flex-col justify-around`}
          >
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" max-sm:h-[fit-content] flex flex-col justify-between items-end max-sm:flex-col-reverse max-sm:justify-start max-sm:items-center">
          <div className=" w-[128px]">
            <h3 className={`${headingStyle} mb-[11px] max-sm:hidden`}>
              Social Links
            </h3>
            <div className=" flex justify-between max-sm:mt-[10px]">
              <Instagram />
              <Twitter />
              <Facebook />
            </div>
          </div>
          <p className={`${textFontStyle}`}>© 2022 Food Truck Example</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
