import ArticleCard from "./ArticleCard";
import articles from "../data/articles";
import { useState } from "react";
import { useEffect } from "react";
import RightArrow from "../svg/RightArrow";
import LeftArrow from "../svg/LeftArrow";

const LatestArticles = () => {
  const numberOfCards = 3;
  const totalArticles = articles.length;
  const [index, setIndex] = useState(0);
  const [threeArticles, setThreeArticles] = useState([]);
  const numberOfPages = Math.ceil(totalArticles / numberOfCards);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);

  useEffect(() => {
    getThreeArticle();
  }, [index]);

  const getThreeArticle = () => {
    let arr = [];
    const lastIndex =
      index + numberOfCards <= totalArticles
        ? index + numberOfCards
        : totalArticles;

    for (let i = index; i < lastIndex; i++) {
      arr.push(articles[i]);
    }
    setThreeArticles(arr);
  };

  const handleLeftClick = () => {
    if (index - 2 * numberOfCards <= 0) setDisableLeft(true);
    if (index - numberOfCards >= 0) {
      setIndex((prevIndex) => prevIndex - numberOfCards);
      setDisableRight(false);
    }
  };
  const handleRightClick = () => {
    if (index + 2 * numberOfCards >= totalArticles) setDisableRight(true);
    if (index + numberOfCards < totalArticles) {
      setIndex((prevIndex) => prevIndex + numberOfCards);
      setDisableLeft(false);
    }
  };

  const arrowBtnStyle =
    "border w-[28px] h-[29px] rounded-[5px]  flex justify-center items-center ease-in-out duration-300 active:scale-95";

  return (
    <div className="h-[994px] pt-[142px] px-[108px]">
      <h1 className="font-['SansPro-sb']  text-[--secondary-color] text-[56px] tracking-[0.04em] mb-[60px]">
        Latest Articles
      </h1>

      <div className="w-[1225px] flex justify-between">
        {threeArticles.map((e, i) => (
          <ArticleCard key={i} data={e} />
        ))}
      </div>

      <div className="flex justify-center items-center my-[64px]">
        <button
          className={`${arrowBtnStyle} ${
            disableLeft ? "border-[--gray3]" : "border-[--gray2]"
          }`}
          onClick={handleLeftClick}
          disabled={disableLeft}
        >
          <LeftArrow color={disableLeft ? "#AFAFAF" : "#424961"} />
        </button>
        <span className="font-['SansPro'] text-[22px] text-[--gray2] mx-[14px]">
          {index / numberOfCards + 1}/{numberOfPages}
        </span>

        <button
          className={`${arrowBtnStyle} ${
            disableRight ? "border-[--gray3]" : "border-[--gray2]"
          }`}
          onClick={handleRightClick}
          disabled={disableRight}
        >
          <RightArrow color={disableRight ? "#AFAFAF" : "#424961"} />
        </button>
      </div>
    </div>
  );
};

export default LatestArticles;
