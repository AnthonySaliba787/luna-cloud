import { ReactTyped } from "react-typed";
import Cloud from "../assets/cloud.png";
import { FaEye, FaLightbulb, FaLock } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { useRef } from "react";

function Home() {
  const targetRef = useRef(null);
  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="custom-container overflow-y-auto">
          <img
            className="w-80 mx-auto my-[-3rem]"
            src={Cloud}
            alt="Cloud storage vector graphic"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            For people who care about privacy.
          </h1>
          <p className="text-1xl text-blue-600">
            Cloud storage that guarantees{" "}
            <span>
              <ReactTyped
                strings={[
                  "safety",
                  "speed",
                  "performance",
                  "reliability",
                  "privacy",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </span>
            {""}
          </p>
          <button
            className="main-button hover:bg-blue-500 hover:shadow-xl active:bg-blue-400"
            onClick={scrollToElement}
          >
            Learn More
          </button>
        </div>

        {/* Card/Middle Section */}

        <div
          className="max-w-[1300px] grid md:grid-cols-2 gap-12 py-8 text-center mx-auto px-4 overflow-y-auto"
          ref={targetRef}
        >
          <div className="card">
            <FaLightbulb size={40} />
            <h1 className="card-title">Innovative</h1>
            <p className="card-p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus deleniti voluptatibus at adipisci corporis nulla quidem
              obcaecati ut sint nihil.
            </p>
          </div>
          <div className="card">
            <FaLock size={40} />
            <h1 className="card-title">Secure</h1>
            <p className="card-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              magnam assumenda esse cupiditate nemo debitis libero dolore minus,
              eum qui.
            </p>
          </div>
          <div className="card">
            <IoIosSpeedometer size={40} />
            <h1 className="card-title">Fast</h1>
            <p className="card-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              magnam assumenda esse cupiditate nemo debitis libero dolore minus,
              eum qui.
            </p>
          </div>
          <div className="card">
            <FaEye size={40} />
            <h1 className="card-title">Private</h1>
            <p className="card-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
              magnam assumenda esse cupiditate nemo debitis libero dolore minus,
              eum qui.
            </p>
          </div>
        </div>

        {/* Footer Section */}

        <div className="w-full py-16 text-white px-4 bg-blue-600 overflow-y-auto">
          <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2 my-4 lg:text-left text-center">
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Want to keep up with the latest Luna Cloud news?
              </h1>
              <p className="font-medium text-sm md:text-lg">
                Sign up to our newsletter, it's very easy!
              </p>
            </div>
            <div className="my-4">
              <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="p-4 rounded-md text-blue-600 hover:shadow-xl duration-300"
                />
                <button className="main-button bg-white text-blue-600 hover:bg-blue-100 hover:shadow-xl active:bg-blue-200">
                  Sign Up
                </button>
              </div>
              <p className="lg:text-left text-center">
                We care about the protection of your data. Read our{" "}
                <span className="text-blue-300 cursor-pointer">
                  Privacy Policy.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
