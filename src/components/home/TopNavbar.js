import React, { Component } from 'react'
import TopRecherch from './TopRecherch';
export class TopNavbar extends Component {
  componentDidMount() {
    this.navOnClick();
  }
  navOnClick() {
    const link = document.querySelectorAll("li a");
    link.forEach(element => {
      element.style.border = "none";
      element.addEventListener("click", function () {
        link.forEach(element => {
      element.style.border = "none"; });
        this.style.borderBottom = "4px solid #E211BF"; 
      });
    });
  }
    render() {
        return (
            <div>
            <div className="top_navbar pb-5 navbarBC">
             
                   <ul className="flex pt-3">
                <li className="mr-6 ml-20 p-0">
      <a  href="#/" ><img  src="/img/myStoreLogo_2.png" alt="MyStore"  width="100px"/></a> 
  </li>
     <li className="ml-32 mr-6 pt-4">
    <a className="text-violet hover:text-gray-500" href="#/">Home</a>
  </li>
  <li className="mr-6 pt-4">
    <a className="text-violet hover:text-gray-500" href="#/">Today's Deals</a>
  </li>
  <li className="mr-6 pt-4">
    <a className="text-violet hover:text-gray-500" href="#/">Sign Up</a>
  </li>
  <li className="mr-6 pt-4">
    <a className="text-violet hover:text-gray-500" href="#/">Sign In</a>
                </li>
                <li className="mr-6 pt-4">
                              <TopRecherch></TopRecherch>

                </li>
                        <li className="mr-6">
     <button className="ml-12 mt-4"><img className="" src="/img/list.svg" alt="MyStore"  width="50px"/></button> 
  </li>
              </ul>
           
                </div>

            </div>
        )
    }
}

export default TopNavbar
