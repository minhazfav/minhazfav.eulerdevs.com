import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaWordpressSimple } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { LiaReact } from "react-icons/lia";
import { IoLogoNodejs } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Services = () => {
  const [refOne, inViewOne] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refTwo, inViewTwo] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refThree, inViewThree] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refFour, inViewFour] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refFive, inViewFive] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refSix, inViewSix] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div style={{ margin: "0 auto" }} className="max-w-6xl flex flex-col">
      <div>
        <h2 className="text-center text-4xl py-12">My Services</h2>
      </div>
      <div className="flex flex-col place-items-center">
        <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-5 lg:gap-8">
          <motion.div
            ref={refOne}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
          >
            {/* Card One */}
            <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
              <div className="flex items-center mb-4">
                <IoShareSocialOutline className="text-3xl text-rose-600" />
                <h5 className="ml-3 text-2xl font-semibold">
                  Social Media Markeing
                </h5>
              </div>
              <p className="block leading-normal font-light mb-4">
                I'm here to turn strategies into stories and inspire others to
                dream big and take action.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="#"
                  className="text-rose-600 font-medium text-lg hover:text-xl flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={refTwo}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewTwo ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
          >
            {/* Card Two */}
            <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
              <div className="flex items-center mb-4">
                <FaWordpressSimple className="text-3xl text-rose-600" />
                <h5 className="ml-3 text-2xl font-semibold">
                  WordPress Website
                </h5>
              </div>
              <p className="block leading-normal font-light mb-4">
                I'm here to build websites that inspire, empower, and connect
                with the world.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="#"
                  className="text-rose-600 font-medium text-lg hover:text-xl flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={refThree}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewThree ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
          >
            {/* Card Three */}
            <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex md:hidden lg:flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
              <div className="flex items-center mb-4">
                <RiTailwindCssLine className="text-3xl text-rose-600" />
                <h5 className="ml-3 text-2xl font-semibold">
                  Webpage (Tailwind)
                </h5>
              </div>
              <p className="block leading-normal font-light mb-4">
                I'm here to craft modern, responsive webpages that inspire and
                engage using Tailwind CSS.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="#"
                  className="text-rose-600 font-semibold text-lg hover:text-xl flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-5 lg:gap-8">
          <motion.div
            ref={refFour}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewFour ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
          >
            {/* Card Four */}
            <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex md:hidden lg:flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
              <div className="flex items-center mb-4">
                <LiaReact className="text-3xl text-rose-600"/>
                <h5 className="ml-3 text-2xl font-semibold">
                  Web App (React)
                </h5>
              </div>
              <p className="block leading-normal font-light mb-4">
              I'm here to create dynamic, user-friendly web apps with React that inspire and empower.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="#"
                  className="text-rose-600 font-semibold text-lg hover:text-xl flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={refFive}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewFive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
          >
            {/* Card Five */}
            <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex md:hidden lg:flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
              <div className="flex items-center mb-4">
                <IoLogoNodejs className="text-3xl text-rose-600"/>
                <h5 className="ml-3 text-2xl font-semibold">
                  Full Stack (MERN)
                </h5>
              </div>
              <p className="block leading-normal font-light mb-4">
              I'm here to build robust, full-stack MERN applications that connect and inspire.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="#"
                  className="text-rose-600 font-semibold text-lg hover:text-xl flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={refSix}
            initial={{ opacity: 0, y: 50 }}
            animate={inViewSix ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
          >
            {/* Card Six */}
            <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex md:hidden lg:flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
              <div className="flex items-center mb-4">
                <MdOutlineShoppingCartCheckout className="text-3xl text-rose-600"/>
                
                <h5 className="ml-3 text-2xl font-semibold">
                  e-Commerce Solutions
                </h5>
              </div>
              <p className="block leading-normal font-light mb-4">
              I'm here to provide seamless eCommerce solutions that drive growth and success.
              </p>
              <div className="card-actions justify-start">
                <a
                  href="#"
                  className="text-rose-600 font-semibold text-lg hover:text-xl flex items-center"
                >
                  Learn More
                  <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
