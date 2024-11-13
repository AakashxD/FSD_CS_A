const parent = document.getElementById("root");
const element=React.createElement("h1",{},"shopping chart");
const item=React.createElement("li",{},"content");
const root=  ReactDOM.createRoot(parent);
root.render([element,item]);
