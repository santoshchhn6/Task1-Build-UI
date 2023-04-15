const ArticleCard = ({ data }) => {
  const { title, description, img } = data;
  return (
    <div className="border-[1.37px] border-[--border-color]/[38] max-sm:border-[--border-color2] w-[381px] h-[554px] rounded-[20.94px] p-[27px] max-sm:w-[271px] max-sm:h-[484px] max-sm:rounded-[27px] max-sm:p-0 flex flex-col items-center">
      <img
        src={img}
        alt=""
        className="w-[326px] h-[257px] rounded-[21px] max-sm:w-[204px] max-sm:h-[166px] max-sm:rounded-[27px] max-sm:mt-[40px] object-cover"
      />
      <div className=" w-[295px] max-sm:w-[100%] h-[fit-content] mt-[35px] max-sm:mt-[39px] flex flex-col max-sm:items-center">
        <h2 className="text-[--secondary-color] text-[21px] max-sm:text-[16px]  font-['Poppin-b']">
          {title}
        </h2>
        <p className=" max-sm:w-[213px] max-sm:h-[106px] text-[--gray]  text-[15px] max-sm:text-[12px] font-['OpenSans'] mt-[14px] mb-[27px] tracking-[-0.02em]">
          {description}
        </p>
        <button className="border max-sm:border-2 border-[--gray2] w-[131px] h-[42px] max-sm:w-[118px] max-sm:h-[26px] rounded-[21px]  font-['SansPro-sb'] text-[16px] max-sm:text-[11px] text-[--gray2] ease-in-out duration-300 hover:scale-105 active:scale-95">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
