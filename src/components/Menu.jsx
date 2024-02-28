import { useState } from "react";
import Menubutton from "./Menubutton";
import './components.css'
import Content from './Content'


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
             <div className= {`conteiner mob ${activeButton === "monts" && "show"}`}>
                <Content activeButton = {activeButton}/>
            </div>
            <Menubutton 
                name = "Женский велосипед"
                cls = {activeButton === "wom" ? 'menu-button1' : 'menu-button1-noactive'}
                change = {() => changeActiveButton("wom")}>
            </Menubutton>
            <div className= {`conteiner mob ${activeButton === "wom" && "show"}`}>
                <Content activeButton = {activeButton}/>
            </div>
            
        </div>
    );
}
export default Menu;