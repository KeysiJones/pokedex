import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
            const pokemons = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const pokemonCompleteData = await axios.get(pokemon.url)
                    return pokemonCompleteData.data
                })
            )
            setPokemonData(pokemons)
        }

        fetchData()
    }, [])

    return (
        <PokemonContext.Provider value={{ pokemonData }}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonProvider }