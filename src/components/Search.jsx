import {useState} from 'react';
import {useGlobalContext} from '../context/context';

const Search = () =>{

  const [text, setText] = useState('');
  const {fetchRandomMeal, setSearchTerm} = useGlobalContext();

  const handleChange = (e)=>{
    setText(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text){
      setSearchTerm(text);
      setText('');
    }
  }

 
  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='type favourite meal' value={text} onChange={handleChange} className='form-input'/>
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipster' onClick={fetchRandomMeal}>Surprise me!</button>
      </form>
    </header>
  )
}

export default Search;