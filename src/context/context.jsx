import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=egg';
  const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

  const fetchMeals = async(url)=>{
    setLoading(true);
    try{
      const {data} = await axios(url);
      setMeals(data.meals);
    }catch(error){
      console.log(error.response);
    }
    setLoading(false);
  }
  
  useEffect(()=>{
      fetchMeals(allMealsUrl);
  },[])
  
  return (
    <AppContext.Provider value={{loading, meals}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;
