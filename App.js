import React from "react"
import Header from "./components/Header" 
import Cards from "./components/Cards"
import data from "/data.js"

export default function App() {
    const mainItems = data.map(item => {
        return (
            <Cards 
                {...item}
            />
        )
    })
    return(
        <div>
            <Header />
            {mainItems}
        </div>
    )
}