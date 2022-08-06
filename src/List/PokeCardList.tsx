import styled from '@emotion/styled'
import PokeCard from './PokeCard'
import { useEffect, useState } from 'react'
import { fetchPokemons, pokemonListReponseType } from '../Service/PokemonService'

const PokeCardList = () => {
  const [pokemons , setPokemons] = useState<pokemonListReponseType>({
    count: 0,
    next: '',
    results: [],
  })


  useEffect(() => {
    (async () => {
      const pokemons : any = await fetchPokemons();
      setPokemons(pokemons);
    })()
  }, [])

  return (
    <List>
      {
        pokemons.results.map((pokemon, index) => {
          return (
            <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
          )
        })
      }
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

export default PokeCardList
