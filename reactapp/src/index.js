//entry point or our application
console.log("This loads my first page through bundle")
//alert("Welcome to the shopping cart application, warm welcome!!!")
import React from "react";
import * as ReactDOM from "react-dom/client";

import Application, {pi} from "./app/ApplicationComponent";//default export/import

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping of single page application

root.render(
    <Application />
)