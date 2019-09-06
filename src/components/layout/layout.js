import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Backdrop from "../backdrop/backdrop";
import * as style from './style.module.css';

let prevScrollpos = window.pageYOffset;

export default class Layout extends React.Component {

  state = {
    sidebarOpen: false,
    showHeader: true
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    var currentScrollPos = window.pageYOffset;
    this.setState({ showHeader: prevScrollpos > currentScrollPos });
    prevScrollpos = currentScrollPos;
  };

  navButtonClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen }
    });
  }

  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  }

  render() {
    const { children } = this.props;
    let backdrop;
    if(this.state.sidebarOpen){
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
        <div>
          <Header show={this.state.showHeader} navButtonClickHandler={this.navButtonClickHandler} />
          <Sidebar show={this.state.sidebarOpen} />
          {backdrop}
          <main className={style.main}>{children}</main>
          <Footer />
        </div>
    )
  }
}