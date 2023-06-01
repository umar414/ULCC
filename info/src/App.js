import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

// const  removeBodyClasses=()=>{

//     document.body.classList.remove('bg-primary');
//         document.body.classList.remove("bg-success");
//     document.body.classList.remove("bg-warning");

//   }
  const toggleMode = (cls) => {
    // removeBodyClasses( cls);
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Umar-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Umar-Light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Text BS" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" mode={mode}></div>
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route > 
            <Text />
          </Route>
        </Switch>
      </Router> 
    </>
  );
}
// import { Form } from 'react-router-dom';
export default App;
