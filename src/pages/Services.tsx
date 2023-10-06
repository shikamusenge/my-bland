import { FaServicestack } from "react-icons/fa6";
import LargeCard from "../Components/LargeCard";
import icon from "/tools/icons8-services.svg";
const Services = () => {
  const services = [
    "UI & UX Design",
    "Back end Development",
    "Front End Developmen",
    "Database Administration",
    "Camera installation",
    "Computer Maintenance",
  ];
  return (
    <div className="grid min-h-screen items-center p-4 md:px-12">
      <LargeCard>
        <div className="px-4 pt-8 text-white md:w-3/12 font-extrabold shadow-sky-200 shadow-md ">
          <img
            src={icon}
            alt="Skills"
            width="50%"
            className="md:w-1/2 w-10 m-auto"
          />
          <p className="text-center text-[30px] tracking-wider mt-4">
            Services
          </p>
        </div>
        <div className="md:w-9/12 p-4 bg-[#013853] flex md:px-12 text-white items-center">
          <div className="">
            <div>
              <p className="text-[20px] mb-4 mt-5 tracking-wider">
                Services I offer
              </p>
              <div className="w-full">
                {services.map((item, i) => (
                  <p key={i} className="mb-2 flex gap-1 ">
                    <FaServicestack /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LargeCard>
    </div>
  );
};

export default Services;
