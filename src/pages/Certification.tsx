import { FaAward } from "react-icons/fa6";
import LargeCard from "../Components/LargeCard";
import icon from "/award.png";
const Certification = () => {
  const Award = [
    "TVET certificate V In software Development",
    "Andera Kick-strat program certificate",
    "English Level 7 certificate EF Education",
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
          <p className="text-center text-[30px] tracking-wider mt-4">Awards</p>
        </div>
        <div className="md:w-9/12 p-4 bg-[#013853] flex md:px-12 text-white items-center">
          <div className="">
            <div>
              <p className="text-lg md:text-[20px] mb-4 mt-5 tracking-wider">
                Awards
              </p>
              <div className="w-full text-[30px]">
                {Award.map((item, i) => (
                  <p key={i} className="mb-2 flex gap-1 ">
                    <FaAward /> {item}
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

export default Certification;
