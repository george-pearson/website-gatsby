import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Backdrop from "../backdrop/backdrop";

export default class Layout extends React.Component {

  state = {
    sidebarOpen: false
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
          <Header navButtonClickHandler={this.navButtonClickHandler} />
          <Sidebar show={this.state.sidebarOpen} />
          {backdrop}
          <main>{children}</main>
          <Footer />
        </div>
    )
  }
}