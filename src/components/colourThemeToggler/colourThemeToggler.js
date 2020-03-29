import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default ({theme, toggleTheme}) => {
  return (
    <button
      onClick={e => toggleTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Switch between light and dark mode.">
    { theme === 'light' && <FontAwesomeIcon icon={faMoon} size="1x"/> }
    { theme === 'dark' && <FontAwesomeIcon icon={faSun} size="1x"/> }
    </button>
  );
}