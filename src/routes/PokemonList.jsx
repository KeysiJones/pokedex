import styled from 'styled-components'
import { usePokemon } from '../hooks/usePokemon'; // Add this import statement
import popcornBanner from '../../src/assets/popcorn_banner.jpg'

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
    margin: 10px;
`

export const PokemonImage = styled.img`
    background-color: #00000014;
    border-radius: 5px;
    width: 200px;
    padding: 10px;
`

export const Paragraph = styled.p`
    font-size: 23px;
    color: black;
`

const Subtitle = styled.span`
    font-size: 15px;
    color: black;
`

const BannerWrapper = styled.div`
    max-width: 1200px;

    img {
        width: 100%;
    }
`

export const PokemonList = () => {
    const { pokemonData } = usePokemon()
    console.log({ pokemonData })

    return (
        <PokemonListWrapper>
            <BannerWrapper>
                <img src={popcornBanner} alt=''/>
            </BannerWrapper>
            <a href="https://br.freepik.com/vetores-gratis/cartaz-de-pipoca-realista-com-flocos-caindo-para-o-balde-na-ilustracao-vetorial-de-fundo-azul_37421291.htm#query=popcorn%20banner&position=0&from_view=keyword&track=ais&uuid=5f371038-70c6-40a1-a3f0-737dfe25760b">Imagem de macrovector</a> no Freepik
            <h1>Pokemon List</h1>
            <PokemonContainer>
                {pokemonData.map((pokemon) => (
                    <PokemonCard href={`/pokemons/${pokemon.id}`} key={pokemon.id}>
                        <PokemonImage
                            src={pokemon?.sprites?.other['official-artwork']?.front_default}
                            alt={pokemon.name}
                        />
                        <Paragraph>#{pokemon.id}</Paragraph>
                        <Paragraph>{pokemon.name}</Paragraph>
                        <Subtitle>Tipo: {pokemon.types[0].type.name}</Subtitle>
                    </PokemonCard>
                ))}
            </PokemonContainer>
        </PokemonListWrapper>
    );
}