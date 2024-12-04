import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  FaWordpressSimple,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiLinux } from "react-icons/di";
import { SiLibreoffice, SiCanva, SiMongodb, SiExpress } from "react-icons/si";
import { FaElementor } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Experties = () => {
  const skills = [
    { icon: <DiLinux className="text-4xl text-rose-600" />, delay: 0.2 },
    { icon: <SiLibreoffice className="text-4xl text-rose-600" />, delay: 0.4 },
    { icon: <SiCanva className="text-4xl text-rose-600" />, delay: 0.6 },
    {
      icon: <FaWordpressSimple className="text-4xl text-rose-600" />,
      delay: 0.8,
    },
    { icon: <FaElementor className="text-4xl text-rose-600" />, delay: 1.0 },
    { icon: <FaHtml5 className="text-4xl text-rose-600" />, delay: 1.2 },
    { icon: <IoLogoCss3 className="text-4xl text-rose-600" />, delay: 1.4 },
    {
      icon: <RiTailwindCssFill className="text-4xl text-rose-600" />,
      delay: 1.6,
    },
    { icon: <FaJs className="text-4xl text-rose-600" />, delay: 1.8 },
    { icon: <FaReact className="text-4xl text-rose-600" />, delay: 2.0 },
    { icon: <SiMongodb className="text-4xl text-rose-600" />, delay: 2.2 },
    { icon: <SiExpress className="text-4xl text-rose-600" />, delay: 2.4 },
    { icon: <FaNodeJs className="text-4xl text-rose-600" />, delay: 2.6 },
  ];

  return (
    <div style={{ margin: "0 auto" }} className="max-w-6xl flex flex-col pb-12">
      <div>
        <h2 className="text-center text-4xl py-12">My Skills</h2>
      </div>
      <div className="border p-10 rounded-md">
        <div className="flex justify-evenly flex-wrap gap-1">
          {skills.map((skill, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: skill.delay,
                }}
                className="h-14 w-14 flex justify-center items-center bg-base-100 dark:bg-base-200 rounded-md"
              >
                {skill.icon}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experties;
