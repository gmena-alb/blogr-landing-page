import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showMenuDesktop = (width) => {
    setScreenWidth(width);
  };

  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        isMenuOpen,
        showMenuDesktop,
        screenWidth,
        setIsDesktop,
        isDesktop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
