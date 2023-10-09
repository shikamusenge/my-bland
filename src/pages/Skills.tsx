import LargeCard from "../Components/LargeCard";
import icon from "/icons8-skills-48.png";
const Skills = () => {
  const tools = [
    "js.svg",
    "ts.svg",
    "java.svg",
    "php.png",
    "react.png",
    "jsp.png",
    "tailwind.png",
    "bootstrap.svg",
    "git.png",
    "github.png",
    "mysql.png",
    "psql.svg",
    "prisma.svg",
  ];
  const uiTool = ["figma.svg", "xd.png", "ai.svg", "ps.svg"];
  const processes = [
    "Planning: Define project scope, requirements, and timeline.",
    "Design: Create system architecture, UI/UX, and database schema.",
    "Development: Write code, follow best practices, use version control",
    "Testing: Develop and execute test cases, fix bugs.",
    "Deployment: Set up production environment and deploy.",
    "Monitoring & Maintenance: Monitor, log, and perform routine maintenance.",
    "Documentation: Create user and code documentation.",
    "QA & UAT: Quality assurance and user acceptance testing.",
    "Release: Plan and execute product release",
    "Post-launch: Monitor, support, and gather feedback for improvements",
    "Agile Iterations (Optional): For Agile projects, iterate development",
    "Continuous Improvement: Plan and implement updates.",
    "Project Closure: Review, document, and close the project",
  ];
  return (
    <div className="min-h-screen p-4 md:px-12">
      <LargeCard>
        <div className="px-4 pt-8 text-white md:w-3/12 font-extrabold shadow-sky-200 shadow-md ">
          <img
            src={icon}
            alt="Skills"
            width="50%"
            className="md:w-1/2 w-10 m-auto"
          />
          <p className="text-center text-[30px] tracking-wider mt-4">SKILLS</p>
        </div>
        <div className="md:w-9/12 p-4 bg-[#013853] flex justify-center text-white items-center">
          <div>
            <div>
              <p className="text-2xl mb-4">
                Programming Languages, Database, Tolls, Frame works and
                Libraries
              </p>
              <div className="flex gap-2 flex-wrap">
                {tools.map((tool, i) => (
                  <picture key={i}>
                    <img
                      src={`/tools/${tool}`}
                      alt={tool.slice(0, 3)}
                      className="h-10 w-10"
                    />
                  </picture>
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl mb-4 mt-5">UI D UX Design</p>
              <div className="flex gap-2 flex-wrap">
                {uiTool.map((tool) => (
                  <img
                    src={`/tools/${tool}`}
                    key={tool}
                    alt={tool.slice(0, 3)}
                    className="h-10 w-10"
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl mb-4 mt-5">Work Flow</p>
              <ol className="">
                {processes.map((item, i) => (
                  <li key={i} className="ml-8 mb-2 list-item list-disc">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </LargeCard>
    </div>
  );
};

export default Skills;
