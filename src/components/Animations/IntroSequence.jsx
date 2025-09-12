import { useEffect, useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroBox from "../IntroBox/IntroBox";
import AppearingText from "./AppearingText";
import { IntroContext } from "../../contexts/IntroContext";

export default function IntroSequence({ children }) {
  const [show, setShow] = useState(true);
  const { introFinished, setIntroFinished } = useContext(IntroContext);


useEffect(() => {
  const timer1 = setTimeout(() => setShow(false), 3500);
  const timer2 = setTimeout(() => setIntroFinished(true), 4600); // 3500 + 500

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}, []);


  // Visible animation only for IntroBox
  const boxVariants = {
    hidden: { scaleX: 0, background: "rgba(255, 255, 255, 0)" },
    visible: {
      scaleX: [0, 0.02, 0.8, 1, 1],
      background: [
        "rgba(255, 255, 255, 0)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 0.6)",
        "rgba(255, 255, 255, 0.05)",
        "rgba(255, 255, 255, 0.05)"
      ],
      transition: { duration: 2, times: [0, 0.05, 0.2, 0.75, 1] }
    }
  };

  // Exit animation applied to the wrapper
  const wrapperVariants = {
    exit: { 
        opacity: 0, 
        transition: { duration: 1 } }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{ position: "fixed", width: "100vw", height: "100vh", margin: "0", top: "0", left: "0"}}
          variants={wrapperVariants}
          initial={false}   // skip initial animation on wrapper
          animate={false}   // skip animate on wrapper
          exit="exit"       // only exit applies
        >
          {/* IntroBox animates on mount */}
          <IntroBox variants={boxVariants} />

          {/* AppearingText overlays IntroBox */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            <AppearingText delay={700}>{children}</AppearingText>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
