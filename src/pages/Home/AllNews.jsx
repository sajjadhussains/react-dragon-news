import React, { useEffect, useState } from "react";
import News from "./News";

const AllNews = () => {
  const [allNews, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">Dragon News Home</h1>
      {allNews.map((news) => (
        <News news={news} key={news._id}></News>
      ))}
    </div>
  );
};

export default AllNews;
