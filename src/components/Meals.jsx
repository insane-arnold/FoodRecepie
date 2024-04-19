import {useGlobalContext} from '../context/context'

const Meals = () =>{

  const {showModel, hi} = useGlobalContext();
  
  return (
    <div>
      <h1>Meals: {showModel} and {hi}</h1>
    </div>
  )
}

export default Meals;