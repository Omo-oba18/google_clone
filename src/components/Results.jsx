import React, { useEffect } from "react";
import { useResultContext } from "../context/ResultContextProvider";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();

  const location = useLocation(); //image, videos,
  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "./videos") {
        getResults(`query=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}?query=${searchTerm}&num=20`);
      }
    }
  }, [searchTerm, location.pathname]);
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-32">
          {results?.items?.map(({ link, title }, index) => (
            <div className="sm:w-2/5 w-full" key={index}>
              <a target="_blank" rel="noreferrer" href={link}>
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "imagesearch":
      return (
        <div>
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                className="sm:p-3"
                href={href}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="w-36 break-word text-sm mt-2">{title}</p>
              </a>
            )
          )}
        </div>
      );

    default:
      return "ERROR!";
  }
};

export default Results;
