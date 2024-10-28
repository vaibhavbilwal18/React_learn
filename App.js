import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div" ,
     {id : "parent"} , [
        React.createElement("div" , {id : "child1"} ,[
            React.createElement("h1" , {} , "🚀🚀"),
            React.createElement("h2" , {} , "This is h2 tag") ]),

            React.createElement("div" , {id : "child2"} ,[
                React.createElement("h1" , {} , "This is h1 tag"),
                React.createElement("h2" , {} , "This is h2 tag") ])
     ]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);