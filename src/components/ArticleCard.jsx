const ArticleCard = ({ data }) => {
  const { title, description, img } = data;
  return (
    <div className="border-[1.37px] border-[--border-color]/[38] w-[381px] h-[554px] rounded-[20.94px] p-[27px] flex flex-col items-center">
      <img
        src={img}
        alt=""
        className="w-[326px] h-[257px] rounded-[21px] object-cover"
      />
      <div className="w-[295px] h-[fit-content] mt-[35px] ">
        <h2 className="text-[--secondary-color] text-[21px] font-['Poppin-b']">
          {title}
        </h2>
        <p className="text-[--gray] text-[15px] font-['OpenSans'] mt-[14px] mb-[27px] tracking-[-0.02em]">
          {description}
        </p>
        <button className="border border-[--gray2] w-[131px] h-[42px] rounded-[21px]  font-['SansPro-sb'] text-[16px] text-[--gray2] ease-in-out duration-300 hover:scale-105 active:scale-95">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
