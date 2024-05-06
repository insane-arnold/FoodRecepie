import {useGlobalContext} from '../context/context';
import { LuThumbsUp } from "react-icons/lu";

const Meals = () =>{

  const {loading, meals, selectMeal, addToFavourites} = useGlobalContext();

  if(loading){
    return(
      <section className='notify'>
        <h1>Loading ....</h1>
      </section>
    )
  }

  if(meals == null){
    return(
      <section className='notify'>
        <h1>No meals matched your search term. Please try again.</h1>
      </section>
    )
  }
  
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        return (
          <article key={idMeal} className="single-meal">
            <img src={image} alt={title} className="img" onClick={()=>selectMeal(idMeal)} />
            <footer>
              <h2>{title}</h2>
              <button className="like-button" onClick={()=>addToFavourites(idMeal)}><LuThumbsUp /></button>
            </footer>
          </article>
        );
      })}
    </section>
  )
}

export default Meals;