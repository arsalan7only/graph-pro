import React, { useState } from "react";
import { route } from "./RouteData";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import "./SideBar.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "250px" : "50px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={"sidebar"}
      >
        <div className="top-section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                Admin Panel
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <MenuIcon onClick={toggle} />
          </div>
        </div>

        <section className="routes">
          {route.map((item, index) => {
            if (item.subRoutes) {
              return (
                <SidebarMenu
                  showAnimation={showAnimation}
                  setIsOpen={setIsOpen}
                  route={item}
                  key={index}
                  isOpen={isOpen}
                />
              );
            }
            return (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                // activeClassName="active"
              >
                <div className="icon">{item.icone}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
    </div>
  );
};

export default SideBar;
