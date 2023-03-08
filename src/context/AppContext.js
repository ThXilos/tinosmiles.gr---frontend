import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(true);
  const [toggleWarning, setToggleWarning] = useState(true);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageWarning, setMessageWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <AppContext.Provider
      value={{
        mobileMenuOpen,
        setMobileMenuOpen,
        toggleLanguage,
        setToggleLanguage,
        toggleWarning,
        setToggleWarning,
        messageSuccess,
        setMessageSuccess,
        messageWarning,
        setMessageWarning,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
