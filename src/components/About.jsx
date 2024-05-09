import Info from "../assets/info.png";
import Contact from "../assets/contact.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function About() {
  return (
    <>
      <div>
        <div className="custom-container min-h-[1400px] justify-evenly px-8 text-center gap-8 relative bottom-20">
          <div className="w-full min-h-[500px] flex flex-col justify-evenly items-center rounded-md bg-white shadow-xl py-8 px-8 hover:scale-[1.02] hover:bg-blue-100 duration-300">
            <img
              className="w-72 mx-auto my-[-2rem]"
              src={Info}
              alt="Guy sitting on a chair graphic"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 py-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl font-normal text-gray-700">
              At Luna Cloud, we firmly believe in bringing private and
              affordable cloud storage services to everyone. In a world plagued
              by data collection, your data is legally safeguarded, with the
              most sophisticated encryption technology available.
            </p>
          </div>
          <div className="w-full min-h-[500px] flex flex-col justify-evenly items-center rounded-md bg-white shadow-xl py-8 px-8 hover:scale-[1.02] hover:bg-blue-100 duration-300">
            <img
              className="w-72 mx-auto my-[-2rem]"
              src={Contact}
              alt="Guy sitting on a chair graphic"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 py-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl font-normal text-gray-700">
              Contact us on our email:{" "}
              <span className="text-blue-600 cursor-pointer">
                lunacloud@support.com
              </span>{" "}
              or find us on social media!
            </p>
            <div className="w-full flex flex-row justify-center items-center gap-8 py-4 text-blue-600">
              <FaFacebook
                size={30}
                className="cursor-pointer hover:scale-[1.25] duration-300"
              />
              <FaTwitter
                size={30}
                className="cursor-pointer hover:scale-[1.25] duration-300"
              />
              <FaInstagram
                size={30}
                className="cursor-pointer hover:scale-[1.25] duration-300"
              />
              <FaGithub
                size={30}
                className="cursor-pointer hover:scale-[1.25] duration-300"
              />
              <FaLinkedin
                size={30}
                className="cursor-pointer hover:scale-[1.25] duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
