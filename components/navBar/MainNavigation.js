import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1>ATV Project</h1>
      <span className={classes.sidebarItem}>
        <IoHomeSharp className={classes.sidebarIcon} />
        <div className={classes.gap}></div>
        <Link href="/">Home</Link>
      </span>
      <span className={classes.sidebarItem}>
        <IoMdSettings className={classes.sidebarIcon} />
        <div className={classes.gap}></div>
        <Link href="/">Settings</Link>
      </span>
      <span className={classes.sidebarItem}>
        <FaInfoCircle className={classes.sidebarIcon}/>
        <div className={classes.gap}></div>
        <Link href="/">About</Link>
      </span>
      <span className={classes.sidebarItem}>
        <FaBookmark className={classes.sidebarIcon}/>
        <div className={classes.gap}></div>
        <Link href="/">Library</Link>
      </span>
    </header>
  );
}

export default MainNavigation;