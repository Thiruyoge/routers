import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import All from "./components/All";
import Cs from "./components/cs";
import Ds from "./components/ds";
import Fsd from "./components/fsd";

import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

const routing = (
  <>
  <App/>
  <Router>

  <nav class="navbar navbar-dark bg-dark mb-5">
  <div class="container text-light">
      <Link className="text-light" style={{textDecoration:"none"}} to="/all">All</Link> 
      <Link className="text-light" style={{textDecoration:"none"}}to="/cs">Cyber Security</Link> 
      <Link className="text-light" style={{textDecoration:"none"}}to="/ds">Data Science</Link> 
      <Link className="text-light" style={{textDecoration:"none"}} to="/fsd">Full Stack Development</Link> 
      <hr />
    </div>
</nav>


    

    <Routes>
      <Route path="/all" element={<All />} />
      <Route path="/cs" element={<Cs />} />
      <Route path="/ds" element={<Ds />} />
      <Route path="/fsd" element={<Fsd />} />
    </Routes>
  </Router>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{routing}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
