import { ReactTyped } from "react-typed";
import Cloud from "../assets/cloud.png";

function Home() {
  return (
    <>
      <div>
        <div className="max-w-[1000px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <img
            className="w-80 mx-auto my-[-3rem]"
            src={Cloud}
            alt="Cloud storage vector graphic"
          />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold py-2">
            For people who care about privacy.
          </h1>
          <p className="text-1xl md:text-1xl text-blue-600">
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
          <button className="w-[150px] md:w-[175px] lg:w-[200px] py-4 my-4 bg-blue-600 text-white  rounded-md mx-auto font-medium hover:bg-blue-500 active:bg-blue-400 duration-300">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
