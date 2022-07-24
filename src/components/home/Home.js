import React, { Component } from 'react'
import TopNavbar from './TopNavbar'
import HomeContent from './HomeContent'
export class Home extends Component {
    render() {
        return (
            <div>
                <TopNavbar></TopNavbar>
                <HomeContent></HomeContent>              
            </div>

        )
    }
}

export default Home
