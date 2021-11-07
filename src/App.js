import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const displayStoredMode = () => {
  let mode = "light-mode";
  if (localStorage.getItem("mode")) {
    mode = localStorage.getItem("mode");
  }
  return mode;
};

function App() {
  const [mode, setMode] = useState(displayStoredMode());

  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("mode", mode);
  }, [mode]);

  const switchColorHandler = () => {
    if (mode === "dark-mode") {
      setMode("light-mode");
    } else {
      setMode("dark-mode");
    }
  };

  // VANILLA JS METHOD:
  // useEffect(() => {
  //   document.body.classList.add(mode)
  // }, [mode]);`
  // const switchColorHandler = () => {
  //   if (document.body.classList.contains("light-mode")) {
  //     document.body.classList.remove("light-mode");
  //     document.body.classList.add("dark-mode");
  //   } else if (document.body.classList.contains("dark-mode")) {
  //     document.body.classList.remove("dark-mode");
  //     document.body.classList.add("light-mode");
  //   }
  // };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>dark or light</h1>
          <button className="btn" onClick={switchColorHandler}>
            switch
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((x) => {
          return <Article key={x.id} {...x} />;
        })}
      </section>
    </main>
  );
}

export default App;
