import {useContext} from 'react';
import AppContext from '../context/context';

const Meals = () =>{

  const {showModal} = useContext(AppContext);
  
  return (
    <div>
      Meals
      {
        console.log({showModal})
      }
    </div>
  )
}

export default Meals;