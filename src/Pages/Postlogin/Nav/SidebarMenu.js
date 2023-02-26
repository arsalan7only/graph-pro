import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";

const menuAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      when: "afterChildern",
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
      when: "beforeChildern",
    },
  },
};

const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ showAnimation, route, setIsOpen, IsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!IsOpen) {
      setIsMenuOpen(false);
    }
  }, [IsOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
          <div className="icon">{route.icon}</div>
        <div className="menu_item">
          <AnimatePresence>
            {IsOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {IsOpen && (
          <motion.div animate={isMenuOpen ? { rotate: -90 } : { rotate: 0 }}>
            <KeyboardArrowDownIcon className="key_arrow" />
          </motion.div>
        )}
      </div> 
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hiden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((item, index) => {
              return (
                <motion.div
                  variants={menuItemAnimation}
                  key={index}
                  custom={index}
                >
                  <NavLink to={item.path} className="link">
                    <div className="icon">{item.icon}</div>
                    <motion.div className="link_text">{item.name}</motion.div>
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
