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
          width: isOpen ? "230px" : "45px",
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
              <motion.h3
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                classNam="logo"
              >
                ECOM MANG
              </motion.h3>
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
                  isOpen={isOpen}
                />
              );
            }
            return (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <i class={item.icone} aria-hidden="true"></i>
                {/* <div className="icon">{item.icone}</div> */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      classNam="link_text"
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
