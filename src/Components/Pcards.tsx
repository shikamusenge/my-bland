import { ReactNode } from "react";
import { type projectProps } from "../libs/Types";
import { Link } from "react-router-dom";
function ProjectCard({
  image,
  projectName,
  Techinology,
  links,
}: projectProps): ReactNode {
  return (
    <div className="my-8 shadow-md flex gap-2">
      <div>
        <img
          src={image}
          alt={image.slice(11, 15)}
          className="w-[7rem] h-[7rem] m-2"
        />
      </div>
      <div>
        <div>{projectName}</div>
        <div>
          <h3 className="text-lg">Techinologies:</h3>
          <div className="flex gap-3">
            {Techinology.map((item, i) => (
              <div key={i} className="rounded bg-slate-500 px-1">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 my-2">
          {links.map((item, i) => (
            <div key={i} className="px-1 bg-slate-500">
              <Link to={item.url}>{item.projectName}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
