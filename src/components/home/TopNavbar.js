import React, { Component } from "react";
import TopRecherch from "./TopRecherch";

import { connect } from "react-redux";

export class TopNavbar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.navOnClick();
  }
  navOnClick() {
    const link = document.querySelectorAll("li a");
    link.forEach((element) => {
      element.style.border = "none";
      element.addEventListener("click", function () {
        link.forEach((element) => {
          element.style.border = "none";
        });
        this.style.borderBottom = "4px solid #E211BF";
      });
    });
  }
  render() {
    return (
      <div className=" w-max">
        <div className="top_navbar  navbarBC">
          <ul className="grid grid-flow-col ">
            <li className="mr-6 ml-20 p-0 w-max">
              <a href="#/">
                <img src="/img/myStoreLogo_2.png" alt="MyStore" width="100px" />
              </a>
            </li>
            <li className="ml-32 mr-6 pt-4 w-max">
              <a
                className="text-violet hover:text-gray-500 "
                href="javascript:void(0);"
                onClick={(e) => this.props.setPage(e.target.innerText)}
              >
                Home
              </a>
            </li>
            <li className="mr-6 pt-4  w-max">
              <a
                className="text-violet hover:text-gray-500 "
                href="javascript:void(0);"
                onClick={(e) => this.props.setPage(e.target.innerText)}
              >
                Today's Deals
              </a>
            </li>
            <li className="mr-6 pt-4 w-max">
              <a
                className="text-violet hover:text-gray-500 "
                href="javascript:void(0);"
                onClick={(e) => this.props.setPage(e.target.innerText)}
              >
                Sign Up
              </a>
            </li>
            <li className="mr-6 pt-4 w-max">
              <a
                className="text-violet hover:text-gray-500 "
                href="javascript:void(0);"
                onClick={(e) => this.props.setPage(e.target.innerText)}
              >
                Sign In
              </a>
            </li>
            <li className="mr-6 pt-4">
              <TopRecherch></TopRecherch>
            </li>
            <li className="mr-6">
              <button className="ml-12 mt-4">
                <img
                  className=""
                  src="/img/list.svg"
                  alt="MyStore"
                  width="50px"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogged: state.isLogged,
    currentPage: state.currentPage,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch({ type: "LOGIN" }),
    logout: () => dispatch({ type: "LOGOUT" }),
    setPage: (page) => dispatch({ type: "SET_PAGE", page: page }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);
