import React, { useState, useLayoutEffect } from "react";
import Head from "../head/head";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Backdrop from "../backdrop/backdrop";
import * as style from "./style.module.css";

export default ({ page, post, children }) => {
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
      <Head page={page} post={post} />
      <Header show={showHeader} navButtonClickHandler={navButtonClickHandler} />
      <Sidebar show={sidebarOpen} />
      {sidebarOpen && <Backdrop backdropClickHandler={backdropClickHandler} />}
      <div className={style.fixedFooterWrapper}>
        <main className={style.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
