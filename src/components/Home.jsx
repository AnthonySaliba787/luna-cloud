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
      {/* // TODO: Homepage needs height fixes for landscape mode on devices */}
      <div>
        <div className="max-w-[1000px] h-screen mx-auto text-center flex flex-col justify-center items-center">
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
          <button className="main-button" onClick={scrollToElement}>
            Learn More
          </button>
        </div>
        <div
          className="max-w-[1300px] grid md:grid-cols-2 gap-12 py-8 text-center mx-auto px-4"
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
        {/* // TODO: Potentially add a footer with privacy policy and social media links? */}
      </div>
    </>
  );
}

export default Home;
