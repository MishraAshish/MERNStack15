import React from "react";

//component - is a functional class/function which does single/multiple things independently

const Application = ()=>{

    let name = "Awsome React!!!"

    //return the UI or virtual dom, only one top level parent is allowed
    return(
        <div>
            <div>
                <h2>Application Component</h2>
            </div>
            <div>
                <b><i>{name}</i></b>
            </div>
        </div>
    )
}

export default Application;