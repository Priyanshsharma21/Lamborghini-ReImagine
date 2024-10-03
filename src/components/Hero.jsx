import React from "react";
import { motion } from "framer-motion";
import { useAnimeContext } from "../context/AnimeContext";

const revealMask = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0%",
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.5 * i },
  }),
};

const unRevealMask = {
  initial: { y: "0%" },
  animate: (i) => ({
    y: "100%",
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.1 * i },
  }),
};

const Hero = () => {
  const { content } = useAnimeContext();

  return (
    <div className="">
      {content.title.show ? (
        <div className="w-full overflow-hidden heroTitle text-center">
          <motion.h1
            custom={1} // You can change this index to 0 for the title
            variants={revealMask}
            initial="initial"
            animate="animate"
          >
            {content.title.text}
          </motion.h1>
        </div>
      ) : (
        <div className="w-full overflow-hidden heroTitle text-center">
          <motion.h1
            custom={1} // You can change this index to 0 for the title
            variants={unRevealMask}
            initial="initial"
            animate="animate"
          >
            {content.title.text}
          </motion.h1>
        </div>
      )}

      {content.subtitle.show ? (
        <div className="w-full overflow-hidden heroTitle text-center">
          <motion.h1
            custom={1} // You can change this index to 0 for the title
            variants={revealMask}
            initial="initial"
            animate="animate"
          >
            {content.subtitle.text}
          </motion.h1>
        </div>
      ) : (
        <div className="w-full overflow-hidden heroTitle text-center">
          <motion.h1
            custom={1} // You can change this index to 0 for the title
            variants={unRevealMask}
            initial="initial"
            animate="animate"
          >
            {content.subtitle.text}
          </motion.h1>
        </div>
      )}

      {content.bigTitle.show ? (
        <div className="w-full overflow-hidden heroTitle2 text-center">
          <motion.h1
            custom={1} // You can change this index to 0 for the title
            variants={revealMask}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <span>{content.bigTitle.text1}</span>
            <span>{content.bigTitle.text2}</span>
          </motion.h1>
        </div>
      ) : (
        <div className="w-full overflow-hidden heroTitle2 text-center">
          <motion.h1
            custom={1} // You can change this index to 0 for the title
            variants={unRevealMask}
            initial="initial"
            animate="animate"
            className="flex flex-col"
          >
            <span>{content.bigTitle.text1}</span>
            <span>{content.bigTitle.text2}</span>
          </motion.h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
