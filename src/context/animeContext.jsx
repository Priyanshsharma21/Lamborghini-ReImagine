import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap/all";

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [content, setContent] = useState({
    title: {
      text: "Aventador",
      show: false,
    },
    subtitle: {
      text: "Black-Ghost",
      show: false,
    },
    bigTitle: {
      text1: "Lamborghini",
      text2: "world",
      show: false,
    },
  });
  return (
    <AnimeContext.Provider value={{ content, setContent }}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnimeContext = () => useContext(AnimeContext);
