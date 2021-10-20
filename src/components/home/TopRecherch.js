import React, { Component } from 'react'

export class TopRecherch extends Component {
    render() {
        return (
            <div>
               <div class="mt-2 ml-24 container flex mx-auto">
    <div class="flex  border-mygray rounded-xl py-1 searchBC w-80" >
        <button class="flex items-center justify-center px-4 border-r">
           <img src="../img/search.svg" alt="searsh"></img>
        </button>
        <input type="text" class=" ml-2 px-4 w-64" placeholder="Search..."></input>            
                    </div>
                    
</div>
            </div>
        )
    }
}

export default TopRecherch
