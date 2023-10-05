import { useState, useEffect } from "react";
import icon1 from "/icons8-portfolio-32.png";
import ProjectCard from "../Components/Pcards";
import { type projectProps as Ptype } from "../libs/Types";
import LargeCard from "../Components/LargeCard";
function Portifolio() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data/project.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div
      id="protifolio"
      className="min-h-[90vh] m-4 md:m-12 text-white md:p-1 grid items-center"
    >
      <LargeCard>
        <div className="pt-8 text-white md:w-3/12 font-extrabold">
          <img src={icon1} alt="Skills" className="md:w-1/2 w-10 m-auto" />
          <p className="text-center  text:2xl md:text-[30px] tracking-wider mt-4">
            Portifolio
          </p>
        </div>
        <div className="md:w-9/12 p-4 bg-[#013853] md:px-12 text-white items-center">
          {data.map((item: Ptype, keyItem) => (
            <div key={keyItem}>
              <ProjectCard
                image={item.image}
                Techinology={item.Techinology}
                projectName={item.projectName}
                links={item.links}
              />
            </div>
          ))}
        </div>
      </LargeCard>
    </div>
  );
}

export default Portifolio;
