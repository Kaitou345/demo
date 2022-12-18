import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BDT, USD } from "../constants/currency.js";
import Logo from "../components/Logo";
import styles from "../styles/Home/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import NavLink from "./NavLink.jsx";
import { useSelector } from "react-redux";
import { changeRegion } from "../store/regionSlice.js";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const region = useSelector((state) => state.currency);

  const [showNav, setShowNav] = useState(false);
  const [hide, setHide] = useState(`${styles.hide}`);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const toggleNavbar = () => {
    setShowNav((prev) => !prev);
  };

  const hideNav = () => {
    setShowNav(false);
  };
  useEffect(() => {
    if (showNav) {
      setHide(`${styles.show}`);
    } else {
      setHide(`${styles.hide}`);
    }
  }, [showNav]);

  return (
    <div
      className={
        scrollTop > 0
          ? `${styles.container} ${styles.opaque}`
          : `${styles.container} ${styles.transparent}`
      }
    >
      <Link href="/">
        <a className={styles.logo}>
          <Logo />
        </a>
      </Link>

      <button className={styles.menu} onClick={toggleNavbar}>
        {!showNav && <GiHamburgerMenu />}
      </button>

      <div className={`${styles.nav_container} ${hide}`}>
        <button className={styles.menu} onClick={toggleNavbar}>
          <GrClose />
        </button>
        <nav className={styles.nav}>
          <NavLink
            activeClassName={styles.active}
            href="/"
            className={`${styles.link}`}
            onClick={hideNav}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            href="/about"
            className={`${styles.link}`}
            onClick={hideNav}
          >
            About
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            href="/gallery"
            className={`${styles.link}`}
            onClick={hideNav}
          >
            Gallery
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            href="/contact"
            className={`${styles.link}`}
            onClick={hideNav}
          >
            Contact me
          </NavLink>
        </nav>

        <div className={styles.nav}>
          <select
            name="currency"
            id="currency"
            className={`${styles.link} ${styles.currency}`}
            onChange={(e) => dispatch(changeRegion(e.target.value))}
          >
            <option value={USD}>USD</option>
            <option value={BDT}>BDT</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
