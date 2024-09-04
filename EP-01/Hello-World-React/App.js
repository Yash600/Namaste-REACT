// creating an element is the core thing of React so it comes from the React i.e., the 1st library 'react.development.js'
// creating a "h1" element; crerateElement takes 3 arguments 
const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hello World from React!"
); 
// What is heading? What output will console.log(heading) will give
console.log(heading);  // heading is a react element & react element is a JavaScript object 
// the output will be an object, it won't be a html element


//NESTED ELEMENTS
/**
 * <div id="parent">
 *     <div id="child">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h2 tag</h2>
 *     </div>
 * <div/>
 */
const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
        "div", 
        {id:"child"}, 
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")] 
    )
)


// Reacts need a "root" where it can do all the DOM manipulation 
// when we are creating a root and rendering someting inside it then it's the job of ReactDOM 
const root = ReactDOM.createRoot(document.getElementById("root")); 
// everything will be rendered inside this root element & this root element is referenceing to the div with id "root"

root.render(heading); // render method will convert the 'heading' object into the 'h1' tag and give the output
root.render(parent);
