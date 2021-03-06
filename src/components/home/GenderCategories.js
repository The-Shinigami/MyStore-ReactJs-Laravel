import React, { Component } from 'react'

export class GenderCategories extends Component {
    render() {
        return (
            <div>
                       <div className="genderCategorie border-gray-500 border-2 pl-5 pt-2">
                        <ul className="list-none">
                            <li className="sidebar-text mb-4"><button className="w-11/12"><img alt="a" src="img/male-user.png" className="float-left" width="30px"></img><strong className="relative top-1">Men</strong></button></li>
                            <li className="sidebar-text mb-4"><button className="w-11/12"><img alt="a" src="img/woman-avatar.png" className="float-left" width="30px"></img><strong className="relative top-1">Women</strong></button></li>
                        <li className="sidebar-text mb-4"><button className="w-11/12"><img alt="a" src="img/kids-couple.png" className="float-left" width="30px"></img><span className="relative top-1">
                            <select className="form-select focus:outline-none font-bold w-3/5 cursor-pointer">
                                <option  defaultValue={true} >Kids</option>
                                <option>boy</option>
                                <option>girl</option>
                            </select>
                        </span></button></li>
                        <li className="sidebar-text"><button className="w-11/12"><img alt="a" src="img/baby.png" className="float-left" width="30px"></img><span className="relative top-1">
                            <select className="form-select focus:outline-none font-bold w-3/5 cursor-pointer">
                                <option defaultValue={true}>babies</option>
                                <option>boy</option>
                                <option>girl</option>
                            </select>
                        </span></button></li>
                         </ul>
                    </div>  
            </div>
        )
    }
}

export default GenderCategories
