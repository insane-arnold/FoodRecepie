import {useGlobalContext} from '../context/context';

const Favourite = () =>{
  const {selectMeal, favourites, removeFromFovourite} = useGlobalContext();
  return (
    <section className='favourites'>
      <div className='favourites-content'>
        <h3>Favourites</h3>
        <div className='favourites-container'>
          {
            favourites.map((item)=>{
              const {idMeal, strMealThumb: image} = item;

              return (
                <div key={idMeal} className='favourite-item'>
                  <img src={image} className='favourite-img' onClick={()=>selectMeal(idMeal)}/>
                  <button onClick={()=>removeFromFovourite(idMeal)} className='remove-btn'>remove</button>
                </div>
              )
            })
          }
        </div>
        
      </div>
    </section>
  )
}

export default Favourite;