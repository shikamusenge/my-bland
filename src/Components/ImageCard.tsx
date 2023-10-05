import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const ImageComponent = () => {
  return (
    <div className=" h-[28rem] sm:max-h[80vh] sm:max-w-[90vw] md:w-[18rem] border-4  rounded-[0.5rem] overflow-hidden border-slate-800 bg-slate-600">
      <div className=" h-[70%] max-h-[70%] overflow-hidden">
        <img src="../public/profile1.png" className="h-full" alt="" />
      </div>
      <div className="grid w-full h-[30%] bg-gradient-to-b from-green-800 to-[#01233f] p-6 ">
        <p className="text-md mb-2 flex gap-1 items-center ">
          <FaPhone />
          +(250) 784 589 448
        </p>
        <p className="flex gap-3 justify-around text-[30px] font-bold text-white">
          <Link
            to={"https://github.com/shikamusenge"}
            target="_blank"
            className="hover:-mt-1"
          >
            <FaGithub />
          </Link>
          <Link to={""}>
            <FaLinkedin />
          </Link>
          <Link to={""}>
            <FaTwitter />
          </Link>
          <Link to={""}>
            <FaWhatsapp />
          </Link>
          <Link to={""}>
            <FaFacebook />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ImageComponent;
