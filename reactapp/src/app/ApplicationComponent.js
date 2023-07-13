import React, { Component, PureComponent, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";


let Home = lazy(()=> import("./Common/HomeComponent"));
let Header = lazy(()=> import("./Common/HeaderComponent"));
let Footer = lazy(()=> import("./Common/FooterComponent"));
import { ChildComp } from "./Common/ChildComponent";
let About = lazy(()=> import("./Common/AboutComponent"));
let NotFound = lazy(()=> import("./Common/NotFoundPage"));
//import User from "./ApplicationComponent/User/UserComponent";
import User from "./ApplicationComponent/User/UserContainer";
let UserHook = lazy(()=> import("./ApplicationComponent/User/UserHook"));
let ProductComponent = lazy(()=> import("./ApplicationComponent/Product/ProductComponent"));
let DisplayProduct = lazy(()=> import("./ApplicationComponent/Product/DisplayProduct"));
let CartComponent = lazy(()=> import("./ApplicationComponent/Cart/CartComponent"));
let Hooks = lazy(()=> import("./Hooks/UnderstandingHooks"));

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
                <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    
                    <Routes>
                        {/* <Route path="/" element={<Navigate replace to={"/user"} />}/> */}
                        <Route path="/" element={<Home user={this.User} userName={"Boubacar"}/>}/>
                        <Route path="/home" element={<Home user={this.User} userName={"Boubacar"}/>}/>
                        {/* <Route path="/user" element={<User/>} /> */}
                        <Route path="/product" element={<ProductComponent/>} />
                        <Route path="/cart" element={<CartComponent />} />
                        <Route path="/display" element={<DisplayProduct/>} />
                        <Route path="/userk" element={<UserHook/>} />
                        <Route path="/about" element={<About />}/>
                        <Route path="/hooks" element={<Hooks />}/>
                        <Route path="/about/:id" element={<About />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                    
                    <Footer />
                </Suspense>
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