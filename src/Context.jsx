import { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {
  const [themeToggle, setThemeToggle] = useState(false);
  const [search, setSearch] = useState("mountains");

  const changeTheme = () => {
    const newTheme = !themeToggle;
    setThemeToggle(newTheme);

    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newTheme);
  };

  return (
    <appContext.Provider value={{ themeToggle, changeTheme,search,setSearch }}>
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => useContext(appContext);

export default AppProvider;
