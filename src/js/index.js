//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import AboutUs from "./component/home.jsx";
import Footer from "./component/footer/footer.jsx";

//render your react application
ReactDOM.render(<Footer />, document.querySelector("#app"));
