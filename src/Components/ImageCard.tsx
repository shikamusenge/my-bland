import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6";
import img from "/profile1.png";
import { Link } from "react-router-dom";
const ImageComponent = () => {
  return (
    <div className=" h-[28rem] sm:max-h[80vh] sm:max-w-[90vw] md:w-[18rem] border-4  rounded-[0.5rem] overflow-hidden border-slate-800">
      <picture className=" h-[70%] max-h-[70%] overflow-hidden">
        <img src={img} className="h-full" alt="" loading="lazy" />
      </picture>
      <div className="grid w-full h-[30%] bg-gradient-to-b from-green-800 to-[#01233f] p-6 ">
        <p className="text-md mb-2 flex gap-1 items-center ">
          <FaPhone />
          <Link to="tel:+250784589448">+(250) 784 589 448</Link>
        </p>
        <p className="flex gap-3 justify-around text-[30px] font-bold text-white">
          <Link
            to={"https://github.com/shikamusenge"}
            target="_blank"
            className="hover:-mt-1"
          >
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/shikamusenge-philemon-86494b291/"}
          >
            <FaLinkedin />
          </Link>
          <Link target="_blank" to={"https://twitter.com/ShikamusengeP"}>
            <FaTwitter />
          </Link>
          <Link target="_blank" to={"https://wa.me/0784589448"}>
            <FaWhatsapp />
          </Link>
          <Link
            target="_blank"
            to={"https://www.facebook.com/profile.php?id=100085362144715"}
          >
            <FaFacebook />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ImageComponent;
