import React from "react";
import { motion } from "framer-motion";

const MenuTabs = ({
  submenuTabs,
  filterSubmenu,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="submenu-tabs">
      {submenuTabs.map((submenuTab, index) => (
        <div key={index} onClick={() => setSelectedTab(submenuTab)}>
          <button
            className={`${
              submenuTab === selectedTab
                ? "submenu-tab submenu-tab-active"
                : "submenu-tab"
            }`}
            onClick={() => filterSubmenu(submenuTab)}
          >
            {submenuTab}
            {submenuTab === selectedTab ? (
              <motion.div className="tab-underline" layoutId="underline" />
            ) : null}
          </button>
        </div>
      ))}
      <div className="submenu-styled-divider"></div>
    </div>
  );
};

export default MenuTabs;
