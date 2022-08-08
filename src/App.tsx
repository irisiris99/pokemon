import {  HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
import PokemonDetail from './Detail/PokemonDetail'
import PokeCardList from './List/PokeCardList'

function App() {
  return (
    <HashRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<PokeCardList />}/>
        <Route path="/pokemon/:name" element={<PokemonDetail />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
