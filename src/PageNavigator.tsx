import { Routes, Route } from 'react-router'
import { useLocation } from 'react-router-dom';
import PokemonDetail from './Detail/PokemonDetail'
import PokeCardList from './List/PokeCardList'

const PageNavigator = () => {
  const location = useLocation();
  
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<PokeCardList />}/>
      <Route path="/pokemon/:name" element={<PokemonDetail />}/>
    </Routes>
  )
}

export default PageNavigator