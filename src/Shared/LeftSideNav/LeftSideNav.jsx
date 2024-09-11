import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((result) => setCategories(result));
  }, []);
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">All Category</h2>
      {categories.map((category) => (
        <Link
          to="category/:id"
          className="block pl-10 text-[#9F9F9F] text-xl"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
