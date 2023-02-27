import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";

const menuAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildern",
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.3,
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

const SidebarMenu = ({ showAnimation, route, setIsOpen, isOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <AnimatePresence>
            {!isOpen && <i class={route.icone}></i>}
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                classNam="link_text"
              >
                <i class={route.icone}></i>
                <span style={{ marginLeft: "5px" }}> {route.name}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div animate={isMenuOpen ? { rotate: -90 } : { rotate: 0 }}>
            <KeyboardArrowDownIcon />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
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
                    {/* <i class={item.icone} aria-hidden="true"></i> */}
                    {/* <div className="icon">{item.icone}</div> */}
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
