import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  const links = [
    {
      url: "search",
      text: "All",
    },
    {
      url: "news",
      text: "News",
    },
    {
      url: "images",
      text: "Images",
    },
    {
      url: "videos",
      text: "Videos",
    },
  ];
  return (
    <div className="m-3">
      {links.map(({ url, text }, index) => (
        <NavLink
          to={url}
          className="m-2 mb-2 "
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
