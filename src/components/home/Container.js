import React, { Component } from "react";
import SmallProduct from "./SmallProduct";

import { connect } from "react-redux";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: "../img/hommes-formel-simple-boutonnage-figuring-pardessus.jpg",
    };
  }

  render() {
    return (
      <div>
        <div className="m-3">
          {/* <div className="grid grid-flow-row">
            <div className="grid grid-col">
              <div></div>
              <div className="grid grid-col">
                <div>
                  <SmallProduct imgUrl={this.state.imgUrl}></SmallProduct>
                </div>
                <div>
                  <SmallProduct imgUrl={this.state.imgUrl}></SmallProduct>
                </div>
              </div>
            </div>
          </div> */}
          <div class="my-12  px-4 md:px-12">
            <div class="grid grid-flow-row ">
           
            </div>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Container);
