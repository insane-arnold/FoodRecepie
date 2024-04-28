import {useGlobalContext} from '../context/context';
import { LuThumbsUp } from "react-icons/lu";

const Meals = () =>{

  const {meals} = useGlobalContext();
  
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = meal;
        return (
          <article key={idMeal} className="single-meal">
            <img src={image} alt={title} className="img" />
            <footer>
              <h2>{title}</h2>
              <button className="like-button"><LuThumbsUp /></button>
            </footer>
          </article>
        );
      })}
    </section>
  )
}

export default Meals;