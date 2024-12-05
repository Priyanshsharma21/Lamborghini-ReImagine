import React from "react";
import { showcaseData } from "../constants";

const Home = () => {
  return (
    <main>
      <section className="section intro hero md:h-[88vh] h-[50vh] mt-[20vh] lg:mt-0">
        <div className="header-row">
          <h1>Office for</h1>
        </div>
        <div className="header-row">
          <h1>Future</h1>
          <p>
            Crafting world-class instruments that inspire creativity, ignite
            passion, and bring your music to life.
          </p>

          <p className="text-right">HI / EN</p>
        </div>
        <div className="header-row">
          <h1>Furnishing</h1>
        </div>
      </section>

      <section>
        <div className="w-full flex justify-center archive text-[#fefefe]">
          Archive
        </div>
        <div>
          {showcaseData.map((data, i) => (
            <div key={i} className="archiveRow">
              <div className="flex archiveRow1">
                <h1>{data.title}</h1>
                <p>{data.year}</p>
              </div>
              <div className="flex w-full justify-around archiveRow2">
                <p className="uppercase">{data.region}</p>
                <p className="uppercase underline">Show More</p>
                <p>{data.details.category}</p>
                <p>{data.details.useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
