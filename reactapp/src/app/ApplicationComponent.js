import React, { Component, PureComponent, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import "./app.css";


import Home from "./Common/HomeComponent";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import { ChildComp } from "./Common/ChildComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundPage";

export default class Application extends Component {
    constructor(props){ //props is read only object is used to share info from one comp to another
        super(props);
        this.User = {
            Name : "Tien",
            Age : 19
        }
    }

    render(){
        return(
            <Router>
                <Header />
                
                <Routes>
                    {/* <Route path="/" element={ this.User == "Tien" ? 
                                <Home user={this.User}/> : 
                                <Redirect to="/user"/>}/> */}
                    <Route path="/home" element={<Home user={this.User}/>}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/about/:id" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                
                <Footer />
            </Router>
        )
    }
}

export const pi = 3.14;

//component - is a functional class/function which does single/multiple things independently

// const Application = ()=>{

//     let name = "Awsome React!!!"

//     //return the UI or virtual dom, only one top level parent is allowed
//     //JSX- javascript like xml structure
//     //class/home/header/footer/about/notfound/product/cart/...etc
//     return(
//         <>
//             <div>
//                 <h2>Application Component</h2>
//             </div>
//             <div>
//                 <b><i>{name}</i></b>
//             </div>
//         </>
//     )
// }

// export default Application;

//create your own component with your name and export it as default then named and then with some other exports