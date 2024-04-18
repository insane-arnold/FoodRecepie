import './App.css'
import Favourite from './components/Favourite'
import Meals from './components/Meals'
import Model from './components/Model'
import Search from './components/Search'
import {AppProvider} from './context/context'

export default function App() {
  return (
    <AppProvider>
      <Favourite />
      <Search />
      <Model />
      <Meals />
    </AppProvider>
  )
}
