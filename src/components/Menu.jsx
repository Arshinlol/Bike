import { useState } from "react";
import Menubutton from "./Menubutton";
import './components.css'

// const buttons = [
//     {
//        name: 'm',
//        discription: 'Горный велосипед'
//     },
//     {
//         name: 'f',
//         discription: 'Женский велосипед'
//     }
// ]


function Menu({activeButton, changeActiveButton}) {
    return(
        <div className="menu">
            <Menubutton
                name = "Горный велосипед"
                cls = {activeButton === "monts" ? 'menu-button1' : 'menu-button1-noactive'}
                change = {() => changeActiveButton("monts")}>
            </Menubutton>
            <Menubutton 
                name = "Женский велосипед"
                cls = {activeButton === "wom" ? 'menu-button1' : 'menu-button1-noactive'}
                change = {() => changeActiveButton("wom")}>
            </Menubutton>
        </div>
    );
}
export default Menu;