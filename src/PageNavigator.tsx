import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import PokemonDetail from './Detail/PokemonDetail'
import PokeCardList from './List/PokeCardList'

const PageNavigator = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<PokeCardList />}/>
        <Route path="/pokemon/:name" element={<PokemonDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PageNavigator