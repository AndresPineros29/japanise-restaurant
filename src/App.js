import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import { Main, Navbar, NavbarRes, Footer } from "./containers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <NavbarRes />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
