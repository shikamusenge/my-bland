import { Link } from "react-router-dom";
import { Button1 } from "../Components/Buttons";
import ImageComponent from "../Components/ImageCard";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Certification from "./Certification";
import Portifolio from "./Portifolio";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: "url('/home-bg.jpg')" }}
        className="flex p-4 md:p-12 flex-col bg-cover bg-no-repeat bg-transparent bg-center
      md:flex-row justify-center items-center gap-4 min-h-[88vh] w-screen text-white
      md:justify-between bg-opacity-[0.5]
      "
        id="home"
      >
        <div className="flex justify-center items-center">
          <ImageComponent />
        </div>
        <div className="font-bold my-auto mx-[1rem]">
          <div className="text-[2.5vw] mt-4">
            Hello and welcome! I'm thrilled to have you here.
          </div>
          <div className="text-[4vw]">
            I'm
            <span className="mx-3 text-green-700 font-sans">SHIKAMUSENGE</span>
            Philemon
          </div>
          <div className="italic text-[4vw] animate-pulse">
            Full stack Developer
          </div>
          <div className="flex gap-2 justify-around p-4 ">
            <Button1>
              <Link
                to="https://drive.google.com/file/d/1MgLGLUBU6v8AQXyUyVGMCLeMLFARn5Q1/view?usp=drive_link"
                target="_blank"
              >
                Download Cv
              </Link>
            </Button1>
            <Button1>
              <Link to="mailto:shikamusenge720@gmail.com?cc=codeexp77@gmail.com.com&subject=Your are hired">
                Hire me
              </Link>
            </Button1>
          </div>
        </div>
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <Services />
      <div id="skills">
        <Skills />
      </div>
      <div id="certification">
        <Certification />
      </div>
      <div id="portifolio">
        <Portifolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
