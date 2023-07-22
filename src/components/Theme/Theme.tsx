import React, { ChangeEventHandler } from "react";
import './Theme.css';

// set theme based on user preference
const setDarkMode = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
}

const setLightMode = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
}

// check if user has a preference stored
const storedTheme = localStorage.getItem("theme");

// check if user has a preference set in their OS
const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// set theme based on user preference
const defaultDark = storedTheme === "dark" || (storedTheme === null && preferDark);

// set theme based on user preference
if (defaultDark) {
  setDarkMode();
} else {  
  setLightMode();
}

// toggle theme based on user preference
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  e.target.checked ? setDarkMode() : setLightMode();
}


const Theme = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
}

export default Theme;