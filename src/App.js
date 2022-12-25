import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { Button } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    setColor(!color);
  };

  const pic = () => (color ? " body active" : " body");
  return (
    <div className={pic()}>
      <Button
        id="changecolor"
        onClick={() => {
          changeColor();
        }}
      ></Button>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
