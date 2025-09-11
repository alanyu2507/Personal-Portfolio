import "./IntroBox.css";
import { motion } from "framer-motion";

export default function IntroBox({ children, variants }) {
  return (
    <div
    style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }}>
      <motion.div
      className="IntroBox"
      variants={variants}
      animate="visible"
      initial="hidden"
      exit="exit"
      >
        {children}
      </motion.div>
    </div>
  );
}
