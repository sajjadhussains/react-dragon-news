import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-4 mt-7">
      <button className="bg-[#D72050] py-2 px-5 text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link to="/" className="mr-12">
          I can be a react component,must it be a component
        </Link>
        <Link to="/" className="mr-12">
          I can be a react component,must it be a component
        </Link>
        <Link to="/" className="mr-12">
          I can be a react component,must it be a component
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
