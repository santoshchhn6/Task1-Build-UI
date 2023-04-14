import logo from "../assets/images/logo.png";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";

const Footer = () => {
  const headingStyle =
    "font-['SansPro-sb'] text-[18.84px] text-[--secondary-color]";
  const textFontStyle = "text-[--gray4] text-[14.66px] font-['SansPro']";

  return (
    <div className="border h-[362px] bg-[--light2]  pt-[84px] flex justify-around">
      <img
        src={logo}
        alt=""
        className="w-[161px] h-[125px] object-cover mt-[39px]"
      />

      <div className="border w-[232px] h-[186px] flex flex-col justify-between">
        <h3 className={`${headingStyle}`}>Contact Us</h3>
        <p className={`${textFontStyle}`}>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p className={`${textFontStyle}`}>example2020@gmail.com</p>
        <p className={`${textFontStyle}`}>(904) 443-0343</p>
      </div>

      <div className="border w-[483px] h-[186px] flex justify-between">
        <div className="border w-[232px]  flex flex-col justify-between">
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
        <div className="border flex flex-col justify-between items-end">
          <div className="border w-[128px]">
            <h3 className={`${headingStyle}`}>Social Links</h3>
            <div className=" flex justify-between">
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
