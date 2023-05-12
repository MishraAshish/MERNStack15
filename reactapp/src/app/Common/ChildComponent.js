import React from "react";

export let ChildComp = ({childData})=>{

    return(
        <>
            <h1>This is Child Component Component</h1>
            <b>Passed From Application Component {childData}</b>
        </>
    )
}

//export Footer;