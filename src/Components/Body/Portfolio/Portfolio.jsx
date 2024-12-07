import eduscholars from "../../../../src/assets/eduscholars.png";
import usan from "../../../../src/assets/usan.png";
import protikkhon from "../../../../src/assets/protikkhon.png";
import arcade from "../../../../src/assets/arcade.png";
import minhazfav1 from "../../../../src/assets/minhazfav1.png";
import dirac from "../../../../src/assets/dirac.jpg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
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
    <div style={{ margin: "0 auto" }} className="max-w-7xl px-0 md:px-7 flex flex-col">
      <div>
        <h2 className="text-center text-4xl py-12">My Portfolio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          ref={refOne}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewOne ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Card One */}
          <div className="card bg-base-100 dark:bg-base-200 shadow-xl rounded-lg p-2 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <figure className="p-4">
              <img
                src={eduscholars}
                alt="Edu Shcolars"
                className="rounded-lg min-h-52"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-center text-xl text-rose-600">
                Edu ScholarsBD
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refTwo}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewTwo ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Card Two */}
          <div className="card bg-base-100 dark:bg-base-200 shadow-xl rounded-lg p-2 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <figure className="p-4">
              <img src={usan} alt="Edu Shcolars" className="rounded-lg min-h-52" />
            </figure>
            <div className="p-4">
              <h2 className="text-center text-xl text-rose-600">USAN</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refThree}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewThree ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Card Three */}
          <div className="card bg-base-100 dark:bg-base-200 shadow-xl rounded-lg p-2 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <figure className="p-4">
              <img src={arcade} alt="Edu Shcolars" className="rounded-lg min-h-52" />
            </figure>
            <div className="p-4">
              <h2 className="text-center text-xl text-rose-600">
                Binary Arcade
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refFour}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewFour ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Card Four */}
          <div className="card bg-base-100 dark:bg-base-200 shadow-xl rounded-lg p-2 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <figure className="p-4">
              <img src={minhazfav1} alt="Edu Shcolars" className="rounded-lg min-h-52" />
            </figure>
            <div className="p-4">
              <h2 className="text-center text-xl text-rose-600">
                minhazfav
              </h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refFive}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewFive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Card Five */}
          <div className="card bg-base-100 dark:bg-base-200 shadow-xl rounded-lg p-2 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <figure className="p-4">
              <img src={protikkhon} alt="Edu Shcolars" className="rounded-lg min-h-52" />
            </figure>
            <div className="p-4">
              <h2 className="text-center text-xl text-rose-600">Protikkhon</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={refSix}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewSix ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Card Six */}
          <div className="card bg-base-100 dark:bg-base-200 shadow-xl rounded-lg p-2 my-6 flex flex-col justify-center gap-1 transform transition-all hover:translate-y-[-10px]">
            <figure className="p-4">
              <img src={dirac} alt="Edu Shcolars" className="rounded-lg min-h-52" />
            </figure>
            <div className="p-4">
              <h2 className="text-center text-xl text-rose-600">Paul Dirac</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
