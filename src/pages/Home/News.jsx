import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

import "./Home.css";

const News = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="mb-6 border rounded-2xl">
      <div className="flex justify-between items-center bg-[#F3F3F3] px-5 py-5 mb-3">
        <div className="flex gap-3 items-center">
          <img
            className="w-[40px] h-[40px] rounded-[50%]"
            src={author.img}
            alt=""
          />
          <div className="">
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-[#706F6F]">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>

      <div className="px-5">
        <h1 className="text-xl font-bold mb-5">{title}</h1>
        <img className="mb-8" src={image_url} alt="" />
        <p className="text-[#706F6F]">
          {isReadMore ? details : details.slice(0, 253) + "..."}
        </p>
        <button onClick={handleReadMore} className=" link-warning mb-5">
          {isReadMore ? "show less" : "read more"}
        </button>
        <div className="flex justify-between border-t py-5">
          <div className="flex items-center gap-2">
            <FaStar className="star-fill-color" />
            <FaStar className="star-fill-color" />
            <FaStar className="star-fill-color" />
            <FaStar className="star-fill-color" />
            <FaStar className="star-fill-color" />

            <p>{rating.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
