import React, { Component } from 'react'

export class RangePrice extends Component {
    constructor() {
        super();
        this.state = {
            value: 50,
            valuetwo: 2500,
            
        }
         this.change.bind(this);
    }
    componentDidMount() {
        this.change(); 
    }
    change() {
        let slider = document.getElementById('myRange');  
        let output = document.getElementById("value");
        output.innerHTML = "min price : " + slider.value+ "$";
        
        let slidertwo = document.getElementById('myRangetwo');  
        let outputtwo = document.getElementById("valuetwo");
        outputtwo.innerHTML = "max price : " + slidertwo.value+ "$";
        
         this.setState({
             value: slider.value,
             valuetwo: slidertwo.value,
         })
        slidertwo.oninput = function () {
        slidertwo.style.background = 'linear-gradient(to right, #ac51b5  0%, #ac51b5  '+this.value +'%, #fff ' + this.value + '%, white 100%)';
        outputtwo.innerHTML = "max price : " + this.value+ "$";  
        }
        slider.oninput = function () {
        slider.style.background = 'linear-gradient(to right, #ac51b5  0%, #ac51b5  '+this.value +'%, #fff ' + this.value + '%, white 100%)';
        output.innerHTML = "min price : " + this.value + "$";  
        }
       
    }
    render() {
        return (
            <div className="grid grid-cols-2 ">
                <div className="p-0 m-0 ">
                  <input  type="range" id="myRange" className="slider" value ={this.value} min="0" max="100"></input>
               <div className="ml-2 font-andalus " id="value" >min price : </div>
                </div>
                <div className="p-0 m-0">
                  <input type="range" id="myRangetwo" className="slidertwo" value ={this.valuetwo} min="0" max="100"></input>
               <div className=" font-andalus ml-2" id='valuetwo' >max price : </div>
                </div>
            </div>
        )
    }
}

export default RangePrice
