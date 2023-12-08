import styled from 'styled-components'
import { usePokemon } from '../hooks/usePokemon'; // Add this import statement

const PokemonListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
    align-items: center;
`

const PokemonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

const PokemonCard = styled.a`
    background-color: cornflowerblue;
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
`

const PokemonImage = styled.img`
    width: 200px;
`

const Paraghraph = styled.p`
    font-size: 23px;
    color: black;
`

const Subtitle = styled.span`
    font-size: 15px;
    color: black;
`

export const PokemonList = () => {
    const { pokemonData } = usePokemon()
    console.log({ pokemonData })

    return (
        <PokemonListWrapper>
            <h1>Pokemon List</h1>
            <PokemonContainer>
                {pokemonData.map((pokemon) => (
                    <PokemonCard href={`/pokemons/${pokemon.id}`} key={pokemon.id}>
                        <PokemonImage
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                        <Paraghraph>{pokemon.name}</Paraghraph>
                        <Subtitle>Tipo: {pokemon.types[0].type.name}</Subtitle>
                    </PokemonCard>
                ))}
            </PokemonContainer>
        </PokemonListWrapper>
    );
}