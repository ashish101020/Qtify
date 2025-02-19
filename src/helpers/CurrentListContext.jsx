import { createContext, useState } from "react";

export const CurrentListContext = createContext();

export const CurrentListProvider = ({ children }) => {
  const [currentList, setCurrentList] = useState([]);

  return (
    <CurrentListContext.Provider value={{ currentList, setCurrentList }}>
      {children}
    </CurrentListContext.Provider>
  );
};
