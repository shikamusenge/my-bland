import {
  FaEnvelope,
  FaFacebookF,
  FaFileContract,
  FaGear,
  FaHouseChimney,
  FaLinkedinIn,
  FaServicestack,
  FaTwitter,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className=" px-8 pt-[9rem] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/bg_footer.png')" }}
    >
      <div className="md:flex justify-between px-4">
        <div className="flex justify-between gap-8">
          <div className="text-white">
            <ul>
              <h2 className="font-bold">Quick Link</h2>
              <li>
                <Link to="https://github.com/shikamusenge/">GitHub</Link>
              </li>
              <li>
                <Link to="https://github.com/shikamusenge/">LinkedIN</Link>
              </li>
              <li>
                <Link to="https://github.com/shikamusenge/">Tweetter</Link>
              </li>
            </ul>
          </div>
          <div className="text-white mt-7">
            <p>
              <Link to="/terms">Terms & services</Link>
            </p>
            <p>
              <Link to="/terms">Privancy</Link>
            </p>
          </div>
        </div>
        <div className="flex text-[20px] gap-4 my-4">
          <span className="h-fit p-1 w-fit rounded-sm bg-sky-600 text-white">
            <Link
              to="https://www.linkedin.com/in/shikamusenge-philemon-86494b291/"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
          </span>
          <span className="h-fit p-1 w-fit rounded-sm bg-green-600 text-white">
            <Link to="https://wa.me/0784589448" target="_blank">
              <FaWhatsapp />
            </Link>
          </span>
          <span className="h-fit p-1 w-fit rounded-sm text-sky-400">
            <Link to="https://twitter.com/ShikamusengeP" target="_blank">
              <FaTwitter />
            </Link>
          </span>
          <span className="h-fit p-1 w-fit rounded-sm  bg-sky-900 text-white">
            <Link
              to="https://www.facebook.com/profile.php?id=100085362144715"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </span>
        </div>
        <div className="flex text-[20px] justify-between gap-2 my-4 text-white font-bold">
          <a href="/#home">
            <FaHouseChimney />
          </a>
          <a href="/#about">
            <FaUser />
          </a>
          <a href="/#skills">
            <FaGear />
          </a>
          <a href="/#service">
            <FaServicestack />
          </a>
          <a href="/#Portifolio">
            <FaFileContract />
          </a>
          <a href="/#contacts">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="text-white text-md font-normal text-center text-md md:font-extrabold mb-2">
        &copy; All Right Reserverd to SHIKAMUSENGE Philemon
      </div>
    </div>
  );
};

export default Footer;
