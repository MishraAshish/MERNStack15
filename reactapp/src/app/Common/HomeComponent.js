import React, {Component} from "react";
import { ChildComp } from "./ChildComponent";


export default class Home extends Component {

    constructor(props){
        super(props);
        this.User = props.user;

        //we can write state object to create new virtual dom
        this.state = {
            UserName : props.user.Name,
            UserAge : props.user.Age
        }

        //state : is mutable and upon change of state a new v-dom gets created which will eventually render on browser
        //this.setState
        //this.forceUpdate
    }

    incrementAge = ()=>{

        // this.state.UserAge++;
        // console.log(this.state.UserAge)

        //not recommended
        //this.forceUpdate();//it will skip all life cycle methods and just call the render

        //recommended to use - as it follows all the update life cycle methods
        this.setState({
            UserAge : this.state.UserAge + 1
        })
    }

    //event binding in textbox, two way data binding in react
    updateNameHandler = (evt)=>{
        let targetValue = evt.target.value;
        console.log(targetValue);
        
        this.setState({
            UserName : targetValue
        })

        evt.preventDefault();
    }

    render(){
        console.log("Home Component Is rendered")
        return(
            <>
                <h3><b><i> This is Home Component </i></b></h3>
                <h4><b>Props Values : </b> {this.User.Age} {this.User.Name}</h4>
                
                <div>
                    <b>State Values</b>    
                    <b>{this.state.UserAge }</b>
                </div>
                <b>{this.state.UserName }</b>
                    <input type="button" className="button" onClick={this.incrementAge} 
                            value={"Increment Age"}></input>

                <input type="text" value={this.state.UserName} 
                        placeholder="Please Type Your Name" onChange={this.updateNameHandler}></input>
                
                <ChildComp childData={"Grand Child of Application component"}/>
            </>
        )
    }
}