import { ReactNode } from "react";
const AboutMe = (): ReactNode => {
  return (
    <div className="min-h-[90vh] m-4 md:m-12 text-white md:p-1 grid items-center">
      <div className="bg-[#013853] p-6 rounded-lg">
        <div className="md:flex items-center justify-center m-auto ">
          <div className="md:w-5/12">
            <picture className=" h-[12rem] w-[12rem] my-4 md:w-[20rem] md:h-[20rem] bg-gradient-bS bg-white flex rounded-full overflow-hidden ">
              <img src="/profile2.jpg" className="w-full md:h-[30rem] h-full" />
            </picture>
          </div>
          <div className="md:w-7/12 pt-4">
            <p className="font-bold text-2xl pb-3">ABOUT ME</p>
            <p>
              Hello, I'm SHIKAMUSENGE Philemon, a passionate and dedicated
              full-stack developer. With a strong foundation in a variety of
              technologies including Java, JavaScript, PHP, HTML, React,
              Bootstrap, Express, and Prisma, I bring creative solutions to life
              through the power of coding.
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl py-3">Who Am I ?</p>
          <p>
            I am a problem solver, always eager to take on new challenges and
            create innovative web applications. My journey in the world of
            programming began with a deep curiosity and has evolved into a
            fulfilling career in web development. Whether it's crafting sleek
            and responsive user interfaces or architecting robust server-side
            solutions, I thrive on the thrill of building meaningful projects
            from the ground up.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
