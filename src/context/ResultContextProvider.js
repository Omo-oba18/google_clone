import axios from "axios";
import { React, createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseURL = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JS Mastery");

  const getResults = async (type) => {
    setIsLoading(true);
    await axios
      .get(`${baseURL}${type}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
        },
      })
      .then((response) => {
        setResults(response.data);
      });

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
