const heading = React.createElement(
    "h1" ,
     {id:"heading"},
      "Hello World!!!!"
    );
//it takes 3 args in the createElement (1-Element,2- object, 3- what you want to put inside the element)
// it works on the core React.

const root = ReactDOM.createRoot(document.getElementById("root"))
// it works on the React Dom.

root.render(heading);
//This will render on the page.