import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import Tabs from "../buttons/Tabs";
import HamMenu from "../buttons/HamMenu";
import { useState, useEffect } from "react";
import SideBarTabs from "../buttons/SideBarTabs";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupToggle, setPopupToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 778) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenuHide() {
    setPopupToggle(!popupToggle);
  }

  return (
    <header className={classes.header}>
      {isOpen && <HamMenu toggleMenuHide={() => toggleMenuHide()} />}
      {popupToggle && isOpen && (
        <div className={classes.thePopup}>
          <SideBarTabs
            text="Home"
            icon=<IoHomeSharp className={classes.navBarIcon} />
          />
          <SideBarTabs
            text="Settings"
            icon=<IoMdSettings className={classes.navBarIcon} />
          />
          <SideBarTabs
            text="About"
            icon=<FaInfoCircle className={classes.navBarIcon} />
          />
          <SideBarTabs
            text="Library"
            icon=<FaBookmark className={classes.navBarIcon} />
          />
        </div>
      )}
      <h1>ATV Project</h1>
      {!isOpen && <Tabs text="Home" icon=<IoHomeSharp className={classes.navBarIcon} /> />}
      {!isOpen && <Tabs
        text="Settings"
        icon=<IoMdSettings className={classes.navBarIcon} />
      />}
      {!isOpen && <Tabs text="About" icon=<FaInfoCircle className={classes.navBarIcon} /> />}
      {!isOpen && <Tabs text="Library" icon=<FaBookmark className={classes.navBarIcon} /> />}
    </header>
  );
}

export default MainNavigation;
