import React, { useState, useRef, useEffect } from "react";
import MenuTabs from "./MenuTabs";
import "./ServicesSubmenu.css";
import Submenu from "./Submenu";

const ServicesSubmenu = ({ isSubmenuOpen, location, activeSer }) => {
  const [activeSubmenu, setActiveSubmenu] = useState([]);

  const submenuRef = useRef();

  const { submenu } = activeSer;
  const { servicesTop, serviceTop } = location;

  useEffect(() => {
    if (servicesTop === serviceTop) {
      submenuRef.current.style.top = `135px`;
    } else if (serviceTop < 400) {
      submenuRef.current.style.top = `383px`;
    }
  }, [location, submenu, servicesTop, serviceTop]);

  const submenuTabs = submenu.map((item) => item.menuLabel);
  const [selectedTab, setSelectedTab] = useState(submenuTabs[0]);

  useEffect(() => {
    setSelectedTab(submenuTabs[0]);
  }, [submenu]);

  useEffect(() => {
    const firstTab = submenu.filter(
      (item) => item.menuLabel === submenuTabs[0]
    );
    setActiveSubmenu(firstTab);
  }, [submenu]);

  const filterSubmenu = (submenuTab) => {
    const activeTab = submenu.filter((item) => item.menuLabel === submenuTab);
    setActiveSubmenu(activeTab);
  };

  return (
    <section
      aria-label="service-submenu"
      className={isSubmenuOpen ? "submenu submenu-show" : "submenu"}
      ref={submenuRef}
    >
      <MenuTabs
        submenuTabs={submenuTabs}
        filterSubmenu={filterSubmenu}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Submenu activeSubmenu={activeSubmenu} selectedTab={selectedTab} />
    </section>
  );
};

export default ServicesSubmenu;
