import React from "react";

let Footer = (props)=>{

    //props.age = props.age + 1;

    let age = props.age;//read only

    return(
        <>
            <h1>This is footer Component</h1>
            <b>Passed From Application Component {age}</b>
            <h3> Below are the other properties </h3>
            {props.children[0]}
            {props.children[1]}
        </>
    )
}

export default Footer;