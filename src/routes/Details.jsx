import { useParams } from 'react-router-dom';

function Details() {
  const params = useParams();

    return (
      <div>
        <h2>Nome do pokemon: {params.pokemonName}</h2>
        <p>Aqui vai as informaçoes do Pokemon</p>
      </div>
    );
}

export default Details