import React from "react";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather App</h1>
        <Search />
      </div>
    </div>
    <footer>
      <p>
        This project was coded by Gemma Smedley and is
        <a href="https://github.com/gemmasmedley90/" target="_blank">
          {" "}
          on GitHub
        </a>{" "}
        and
        <a href="#" target="_blank">
          hosted on Netlify
        </a>
      </p>
    </footer>
  </StrictMode>
);
