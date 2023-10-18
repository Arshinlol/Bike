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


function Menu() {
    const[activeButton, setActiveButton] = useState("Горный велосипед");
    return(
        <div className="menu">
            <Menubutton
                name = "Горный велосипед"
                cls = {activeButton === "Горный велосипед" ? 'menu-button1' : 'menu-button1-noactive'}
                change = {() => setActiveButton("Горный велосипед")}>
            </Menubutton>
            <Menubutton 
                name = "Женский велосипед"
                cls = {activeButton === "Женский велосипед" ? 'menu-button1' : 'menu-button1-noactive'}
                change = {() => setActiveButton("Женский велосипед")}>
            </Menubutton>
        </div>
    );
}
export default Menu;