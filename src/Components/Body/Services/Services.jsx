import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [refOne, inViewOne] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [refTwo, inViewTwo] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div style={{ margin: "50px auto" }} className="max-w-6xl flex flex-col">
      <div>
        <h2 className="text-center text-4xl py-12">My Services</h2>
      </div>
      <div className="flex flex-col place-items-center">
        <motion.div
          ref={refOne}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewOne ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
        >
          {/* Card One */}
          <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <div className="flex items-center mb-4 transform transition-all hover:translate-y-[-5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h5 className="ml-3 text-2xl font-semibold">
                Website Review Check
              </h5>
            </div>
            <p className="block leading-normal font-light mb-4 transform transition-all hover:translate-y-[-5px]">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </p>
            <div className="card-actions justify-start">
              <a
                href="#"
                className="text-rose-600 font-semibold text-lg hover:underline flex items-center transform transition-all hover:translate-y-[-5px]"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Card Two */}
          <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <div className="flex items-center mb-4 transform transition-all hover:translate-y-[-5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h5 className="ml-3 text-2xl font-semibold">
                Website Review Check
              </h5>
            </div>
            <p className="block leading-normal font-light mb-4 transform transition-all hover:translate-y-[-5px]">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </p>
            <div className="card-actions justify-start">
              <a
                href="#"
                className="text-rose-600 font-semibold text-lg hover:underline flex items-center transform transition-all hover:translate-y-[-5px]"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Card Three */}
          <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex md:hidden lg:flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <div className="flex items-center mb-4 transform transition-all hover:translate-y-[-5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h5 className="ml-3 text-2xl font-semibold">
                Website Review Check
              </h5>
            </div>
            <p className="block leading-normal font-light mb-4 transform transition-all hover:translate-y-[-5px]">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </p>
            <div className="card-actions justify-start">
              <a
                href="#"
                className="text-rose-600 font-semibold text-lg hover:underline flex items-center transform transition-all hover:translate-y-[-5px]"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={refTwo}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewTwo ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:gap-5 lg:flex-row gap-0 lg:gap-5"
        >
          {/* Card Four */}
          <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <div className="flex items-center mb-4 transform transition-all hover:translate-y-[-5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h5 className="ml-3 text-2xl font-semibold">
                Website Review Check
              </h5>
            </div>
            <p className="block leading-normal font-light mb-4 transform transition-all hover:translate-y-[-5px]">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </p>
            <div className="card-actions justify-start">
              <a
                href="#"
                className="text-rose-600 font-semibold text-lg hover:underline flex items-center transform transition-all hover:translate-y-[-5px]"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Card Five */}
          <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <div className="flex items-center mb-4 transform transition-all hover:translate-y-[-5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h5 className="ml-3 text-2xl font-semibold">
                Website Review Check
              </h5>
            </div>
            <p className="block leading-normal font-light mb-4 transform transition-all hover:translate-y-[-5px]">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </p>
            <div className="card-actions justify-start">
              <a
                href="#"
                className="text-rose-600 font-semibold text-lg hover:underline flex items-center transform transition-all hover:translate-y-[-5px]"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Card Six */}
          <div className="card bg-base-100 dark:bg-base-200 w-96 h-72 shadow-xl rounded-lg p-6 my-6 flex md:hidden lg:flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <div className="flex items-center mb-4 transform transition-all hover:translate-y-[-5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <h5 className="ml-3 text-2xl font-semibold">
                Website Review Check
              </h5>
            </div>
            <p className="block leading-normal font-light mb-4 transform transition-all hover:translate-y-[-5px]">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </p>
            <div className="card-actions justify-start">
              <a
                href="#"
                className="text-rose-600 font-semibold text-lg hover:underline flex items-center transform transition-all hover:translate-y-[-5px]"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
