import React, {Component, PureComponent} from "react";
import { ChildComp } from "./ChildComponent";


//export default class Home extends Component {
//this will compare all the states and props before calling render method so shouldCompUpdate is not req
export default class Home extends PureComponent {
    constructor(props){
        super(props);
        this.User = props.user;

        //we can write state object to create new virtual dom
        this.state = {
            UserName : props.user.Name,
            UserAge : props.user.Age,
            Timer : 1
        }

        //state : is mutable and upon change of state a new v-dom gets created which will eventually render on browser
        //this.setState
        //this.forceUpdate
        this.incrementTimer();

        //UI is not ready we should not access UI/HTML or also not make any state changes or server call
    }

    incrementAge = ()=>{
        // this.state.UserAge++;
        // console.log(this.state.UserAge)

        //not recommended
        //this.forceUpdate();//it will skip all life cycle methods and just call the render
        // this.state.UserName = "Alex";
        // this.forceUpdate();//updates the virtual dom forcefully

        //recommended to use - as it follows all the update life cycle methods
        this.setState({
            UserAge : this.state.UserAge + 1
            //UserName : "Garrick"
        })
    }

    incrementTimer = ()=>{
        // this.interval = setInterval(() => {
        //     this.setState({
        //         Timer : this.state.Timer + 1
        //     })
        //     console.log(this.state.Timer);
        // }, 1000);
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

    //creation life cycle method
    ///view or ui is ready, we can access the html(if required), and do state changes here
    componentDidMount(){
        console.log("Component Did Mount is called")
    }

    //address - 5, product - 20, user - 10, cart - 13 => 50 states
    //if 70-90% of state and props supposed to be updated we should choose PureComponent instead
    //update life cycle methods
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("nextProps ", nextProps)
    //     console.log("nextState ", nextState)

    //     if (this.state.UserName === nextState.UserName) {
    //         return false;            
    //     } else {
    //         return true;    
    //     }
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }

    //destruction life cycle method
    //clear all subscriptions of API or calls like setInterval so that it didn't impact perfornmace
    componentWillUnmount(){
        console.log("Component Will UnMount called!!")
        clearInterval(this.interval);
    }

    render(){
        console.log("Home Component Is rendered")
        return(
            <>
                <h3><b><i> This is Home Component </i></b></h3>
                <h4><b>Props Values : </b> {this.User.Age} {this.User.Name}</h4>
                <h1>{"Timer " + this.state.Timer}</h1>
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