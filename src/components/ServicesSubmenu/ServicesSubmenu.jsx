import React, { useState, useRef, useEffect } from 'react';
import { servicesData } from '../Services/servicesData';
import MenuTabs from './MenuTabs';
import './ServicesSubmenu.css';
import Submenu from './Submenu';

const ServicesSubmenu = ({ isSubmenuOpen, location, activeService }) => {
  const [activeSubmenu, setActiveSubmenu] = useState([]);

  const submenuRef = useRef();

  const { submenu } = activeService;
  const { servicesTop, serviceTop } = location;

  useEffect(() => {
    if (servicesTop === serviceTop) {
      submenuRef.current.style.top = `120px`;
    } else if (serviceTop < 400) {
      submenuRef.current.style.top = `370px`;
    }
  }, [location, submenu]);

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
    <div
      className={isSubmenuOpen ? 'submenu submenu-show' : 'submenu'}
      ref={submenuRef}
    >
      <MenuTabs
        submenuTabs={submenuTabs}
        filterSubmenu={filterSubmenu}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Submenu activeSubmenu={activeSubmenu} selectedTab={selectedTab} />
    </div>
  );
};

export default ServicesSubmenu;
