import {useGlobalContext} from '../context/context';

const Model = () =>{

  const{closeModel, selectedMeal} = useGlobalContext()
  const {strMealThumb: image, strMeal: title, strInstructions: text, strSource: source} = selectedMeal;
  return (
    <aside className="model-overlay">
      <div className="model-container">
        <img src={image} alt={title} className="model-img"/>
        <div className="model-content">
          <h2>{title}</h2>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <button onClick={closeModel} className="btn-close">
            close
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Model;