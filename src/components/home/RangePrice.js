import React, { Component } from 'react'

export class RangePrice extends Component {
    constructor() {
        super();
        this.state = {
        value : 1
    }
    }
    componentDidMount() {
        this.change(); 
    }
    change() {
        let slider = document.getElementById('myRange');
        let output = document.getElementById("value");
        output.innerHTML = "min price : " + slider.value;
         this.setState({
            value : slider.value
        })
        slider.oninput = function () {
           
            output.innerHTML = "min price : " + this.value;
        }
    }
    render() {
        return (
            <div>
              <span>
                  <input type="range" id="myRange" className="slider" value ={this.value} min="1" max="100"></input>
               <div className="ml-2 font-andalus" id="value" >min price : </div>
                </span>
                <span>
                  <input type="range" id="myRange"  value ={this.value} min="1" max="100"></input>
               <div className=" font-andalus"  >max price : </div>
                </span>
            </div>
        )
    }
}

export default RangePrice
