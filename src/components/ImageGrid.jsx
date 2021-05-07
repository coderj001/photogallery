import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion";

const ImageGrid = ({ selecteImagaHandler }) => {
  const { docs } = useFireStore("images");

  function clickHandler(img) {
    selecteImagaHandler(img);
  }

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
          >
            {" "}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt="image"
              onClick={() => clickHandler(doc.url)}
            />{" "}
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
