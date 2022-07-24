import React, { Component } from 'react'

export class Brands extends Component {
    render() {
        return (
            <div className="mt-1 text-center font-andalus text-lg">
                choose a brand
                <div className="bg-white w-56  h-28 rounded-xl m-auto border-gray-500 border-2 pt-2">
                <button> <span className="brand font-andalus">Nike</span> </button> 
                <button> <span className="brand font-andalus">GUCCI</span> </button>
                <button> <span className="brand font-andalus">Louis Vuitton</span> </button>
                <button> <span className="brand font-andalus">Adidas</span> </button>
                <button> <span className="brand font-andalus">Chanel</span> </button>
                <button> <span className="brand font-andalus">Zara</span> </button>
                <button> <span className="brand font-andalus">H&M</span> </button>
                <button> <span className="brand font-andalus">Cartier</span> </button>
                <button> <span className="brand font-andalus">Hermés</span> </button>
                <button> <span className="brand font-andalus">Dior</span> </button>
                <button> <span className="brand font-andalus">Levi's</span> </button>
                </div>
            </div>
        )
    }
}

export default Brands

