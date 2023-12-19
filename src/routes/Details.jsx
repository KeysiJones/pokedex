import { useParams } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';

import { PokemonImage, Paragraph } from './PokemonList';
import styled from 'styled-components';

const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const Heading = styled.h1`
  color: black;
`

function Details() {
  const { pokemonId } = useParams();
  const { getPokemonById } = usePokemon()
  
  const pokemon = getPokemonById(pokemonId)

    return (
      <PokemonWrapper>
        <PokemonImage
          src={pokemon?.sprites?.other['official-artwork']?.front_default}
          alt={pokemon?.name}
        />
        <Heading>Nome do pokemon: {pokemon?.name}</Heading>
        <Paragraph>Aqui vai as informaçoes do Pokemon</Paragraph>
      </PokemonWrapper>
    );
}

export default Details