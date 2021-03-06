import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./pages/Work";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/connect" component={Connect} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;