import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeWrapper = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeWrapper, ThemeContext };
