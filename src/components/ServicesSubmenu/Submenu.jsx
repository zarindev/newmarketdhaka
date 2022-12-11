import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Submenu = ({ activeSubmenu, selectedTab }) => {
  return (
    <div className="submenu-links-ctn">
      {activeSubmenu.map((items, index) => {
        const { menuLinks } = items;
        return (
          <ul className="submenu-links" key={index}>
            {menuLinks.map((link, index) => {
              return (
                <AnimatePresence exitBeforeEnter key={index}>
                  <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <li className="submenu-link">{link}</li>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Submenu;
