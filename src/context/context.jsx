import { createContext, useContext, useEffect } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const showModel = "Hello";
  const hi = "Hi";

  const fetchData = async()=>{
    try{
      const response = await fetch('https://randomuser.me/api');
      const data = await response.json();
      console.log(data);
    }catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <AppContext.Provider value={{showModel, hi}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;
