import React, {Component} from "react";
import { ChildComp } from "./ChildComponent";


export default class Home extends Component {

    constructor(props){
        super(props);
        this.User = props.user;
    }

    render(){
        return(
            <>
                <h3><b><i> This is Home Component </i></b></h3>
                <h4>{this.User.Age} {this.User.Name}</h4>
                <ChildComp childData={"Grand Child of Application component"}/>
            </>
        )
    }
}