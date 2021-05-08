import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({ mode: "light" });

  const toggle = () => {
    const mode = themeState.mode === "light" ? `dark` : `light`;
    setThemeState({ mode });
    window.localStorage.setItem("mode", mode);
  };

  useEffect(() => {
    let localTheme = window.localStorage.getItem("mode");
    localTheme && setThemeState({ mode: localTheme });
  }, []);

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode,
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
