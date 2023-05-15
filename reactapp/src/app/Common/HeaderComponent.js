import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations

let Header = (props)=>{
    let userName = "MERNStack Trainee";

    let goAboutHook = useNavigate();

    let goToAboutClick = (evt)=>{
        goAboutHook("/about/2023")
        evt.preventDefault();
    }

    return(
        <>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            </div>
            <button onClick={goToAboutClick} >Go To About Page</button>
        </>
    )
}

export default Header;

// export let Header2 = (props)=>{
//     return(
//         <>
//             <h1>This is header 2 Component</h1>
//         </>
//     )
// }