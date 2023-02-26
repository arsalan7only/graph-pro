import React, { useState } from "react";
import { RouteData } from "./RouteData";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={"sidebar"}
      >
        <div>
          <AnimatePresence>
            {isOpen && <motion.h1>Admin Panel</motion.h1>}
          </AnimatePresence>

          <div className="bars">
            <MenuIcon />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
