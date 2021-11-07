import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [mode, setMode] = useState("dark-mode");
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const switchColorHandler = () => {
    if (mode === "dark-mode") {
      setMode("light-mode");
    } else {
      setMode("dark-mode");
    }
  };

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
