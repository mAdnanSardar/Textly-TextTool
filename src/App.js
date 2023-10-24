import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About";
function App() {
  const [Btn, setBtn] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (messsage, type) => {
    setAlert({
      //This is a Message
      msg: messsage,
      type: type,
    });
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Has Enabled", "success");
      setBtn("Enable Light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Enabled", "success");
      setBtn("Enable Dark Mode");
    }
  };
  return (
    <>
    <Router>
      {/* <Navbar title="Textly" home="Home" about="About Us" mode={mode}/> */}
      <Navbar title="Textly" mode={mode} toggleMode={toggleMode} Btn={Btn } />
      <Alert alert={alert} />
      <div className="container" my-3="true">
        <Switch>
          <Route exact path="/">
           <TextForm
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}/>
          </Route>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
      </Switch>
      </div>
      </Router>
      </>
    
  );
}

export default App;
