import React, { useState, useLayoutEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Backdrop from "../backdrop/backdrop";
import ThemeToggler from "../themetoggler/themetoggler"
import * as style from "./style.module.css";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useLayoutEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollPos =
      typeof window !== "undefined" ? window.pageYOffset : 0;
    setShowHeader(prevScrollPos >= currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  const navButtonClickHandler = () => {
    setSidebarOpen(prevSidebarOpen => !prevSidebarOpen.sidebarOpen);
  };

  const backdropClickHandler = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
        <div>
          <Header show={showHeader} navButtonClickHandler={navButtonClickHandler} theme={theme} toggleTheme={toggleTheme}/>
          <Sidebar show={sidebarOpen} theme={theme} toggleTheme={toggleTheme}/>
        </div>
        )}
      </ThemeToggler>
      {sidebarOpen && <Backdrop backdropClickHandler={backdropClickHandler} />}
      <div className={style.fixedFooterWrapper}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;