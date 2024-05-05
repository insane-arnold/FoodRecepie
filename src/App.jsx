import './App.css'
// import Favourite from './components/Favourite'
import Meals from './components/Meals'
import Model from './components/Model'
import Search from './components/Search'
import {AppProvider, useGlobalContext} from './context/context';

export default function App() {

  const {showModel, meals} = useGlobalContext();
  
  return (
    <main>
      {/* <Favourite /> */}
      <Search />
      <Meals />
      {
        showModel && <Model />
      }
    </main>
  )
}
