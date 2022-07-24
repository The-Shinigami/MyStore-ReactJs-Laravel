import React, { Component } from "react";
import SideNavbar from "./SideNavbar";
import Container from "./Container";
export class HomeContent extends Component {
  render() {
    return (
      <div className="homeContentBC">
        <div className="grid grid-cols-5">
          <div className="md:col-span-1">
            <SideNavbar></SideNavbar>
          </div>
          <div className="md:col-span-4">
            <Container></Container>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
