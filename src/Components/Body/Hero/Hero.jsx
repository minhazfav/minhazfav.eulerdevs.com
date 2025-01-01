import { useInView } from "react-intersection-observer";
import "./Hero.css";
import Typewriter from "./Typewriter";
import image from "../../../assets/minhazfav.png";

const Hero = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.01, // Trigger when 1% of the element is in view
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <div className="hero min-h-min py-0 lg:py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg shadow-none lg:shadow-2xl">
          <img
            ref={imgRef}
            className={`h-full w-full ${imgInView ? "fade-in-right" : ""}`}
            src={image}
            alt="Minhazul Abedin"
          />
        </div>
        <div
          ref={textRef}
          className={`fade-in-left max-w-full lg:max-w-[50%] ${
            textInView ? "fade-in-left" : ""
          }`}
        >
          <p className="text-sm mb-2 uppercase">Welcome to my world</p>
          <h1 className="text-3xl lg:text-5xl font-bold">
            I’m Minhazul Abedin <br />
            a <Typewriter />
          </h1>
          <p className="py-6">
            I'm deeply fascinated by how the universe is working! that fueling
            my passion for Physics and its derivatives.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="btn btn-primary bg-gradient-to-r from-rose-700 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-rose-600 bg-[length:200%] bg-left hover:bg-right transition-all duration-500 border-none">
              <a href="mailto:minhazfav@eulerdevs.com">Mail Me</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
