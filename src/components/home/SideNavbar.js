import React, { Component } from 'react'
import GenderCategories from './GenderCategories'
import Brands from './Brands'
import SelectBy from './SelectBy'
import RangePrice from './RangePrice'

export class SideNavbar extends Component {
    render() {
        return (
                  <div className="sidebar">
                <GenderCategories></GenderCategories>
                <Brands></Brands>
                <SelectBy></SelectBy>
                <RangePrice></RangePrice>
                </div>
        )
    }
}

export default SideNavbar
