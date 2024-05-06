import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModel, setShowModel] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
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

  const fetchRandomMeal = ()=>{
    fetchMeals(randomMealUrl)
  }

  const selectMeal = (idMeal, favouriteMeal)=>{
    let meal;
    meal = meals.find((meal)=> meal.idMeal === idMeal);
    setSelectedMeal(meal);
    setShowModel(true);
  }

  const closeModel = ()=>{
    setShowModel(false);
  }

  const addToFavourites = (idMeal)=>{
    const alreadyExistinFavourites = favourites.find((meal)=> meal.idMeal === idMeal);
    if(alreadyExistinFavourites) return
    const meal = meals.find((meal)=> meal.idMeal === idMeal);
    const updatedFavourites = [...favourites, meal];
    console.log(updatedFavourites);
    setFavourites(updatedFavourites);
  }

  const removeFromFovourite = (idMeal) => {
    const updatedFavourites = favourites.filter((meal)=> meal.idMeal !== idMeal);
    setFavourites(updatedFavourites);
  }
  
  useEffect(()=>{
      fetchMeals(`${allMealsUrl}${searchTerm}`);
  },[searchTerm])
  
  return (
    <AppContext.Provider 
      value={{loading, meals, setSearchTerm, fetchRandomMeal,
             showModel, selectedMeal, selectMeal, closeModel,
             addToFavourites, removeFromFovourite, favourites}}>{children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContext;
