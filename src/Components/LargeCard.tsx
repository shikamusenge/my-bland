import { type BigCardProp } from "../libs/Types";
const LargeCard = ({ children }: BigCardProp) => {
  return (
    <div
      className="
  md:flex md:justify-between bg-[#01233F] rounded-lg min-h-[70vh] overflow-hidden
  "
    >
      {children}
    </div>
  );
};

export default LargeCard;
