import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './routes/Details.jsx';
import { PokemonList } from './routes/PokemonList.jsx';
import { PokemonProvider } from './contexts/PokemonContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "pokemon/:pokemonName",
    element: <Details />,
  },
  {
    path: "/pokemons",
    element: <PokemonList />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  </React.StrictMode>,
)
