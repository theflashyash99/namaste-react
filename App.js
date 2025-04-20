import React from "react";
import ReactDOM from "react-dom/client"

// JavaScript Code :  Manipulating the HTML DOM using Javscript
/*
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!"
const root = document.getElementById("root");
root.appendChild(heading);
*/ 
 
// React Code : Manipulating the HTML DOM using React
/*
const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/


// creating Nested React Elements Object: Here h1 is an React Object not HTML Element
/*
const heading = React.createElement(
    "h1", 
    { id: "heading", xyz: "abc" }, 
    "Hello World from React!"
);

// Creating root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing React Element(object h1) inside root
root.render(heading);
*/


// creating Nested React Elements Object
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I am an h1 tag"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*
const App = () => {
  return React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "I am an h1 tag")
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
*/


// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                {},
                "I am an h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I am an h2 tag"
            ),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/


// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/


// creating Sibling React Elements Object
/**
 * <div id="parent" style="background: skyblue;">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const child1 = React.createElement("div", { id: "child1" }, [
//   React.createElement("h1", {}, "Yash"),
//   React.createElement("h2", {}, "I am an h2 tag"),
// ]);
// const child2 = React.createElement("div", { id: "child2" }, [
//   React.createElement("h1", {}, "I am an h1 tag"),
//   React.createElement("h2", {}, "I am an h2 tag"),
// ]);

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//     style: {
//       background: "skyblue",
//     },
//   },
//   [child1, child2]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const heading = React.createElement("h1", {"id" : "heading"}, "This is theflashyash");
// we have create a element 
// to show it in the browser we need to select the a DOM to show it in the browser.

// JSX => Babel transpiles it to React.createElement => ReactElement -JS Object => HTMLElement(render);

const Jsxheading = () => ( <> 
<h1 id="heading" tabIndex={"1"}> Namaste React using JSX</h1>
 </>); // component 1

const Title = () => (  // making component composition.
  <> 
   <h1 className="heading"> Hello Yash</h1>
  <Jsxheading/> 
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// now we need to render this to show the things on the internet.

root.render(<Title/>);
