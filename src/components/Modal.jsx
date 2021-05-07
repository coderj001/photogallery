import React from "react";
import { motion } from "framer-motion";

const Modal = ({ image, setSelectImg }) => {
  function clickHandler(e) {
    if (e.target.classList.contains("backdrop")) setSelectImg(null);
  }

  return (
    <motion.div
      className="backdrop"
      onClick={clickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={image}
        alt="enlarge pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
