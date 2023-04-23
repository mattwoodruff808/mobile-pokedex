import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

const useGetPokemon = (pokemon) => {
 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 const getPokemon = () => {
  setIsLoading(true);

  try {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => {
        const pokeRes = res.data;
        const pokeData = {
          name: pokeRes.name,
          sprite: pokeRes.sprites.front_default,
          types: pokeRes.types,
          moves: pokeRes.moves.map(m => m.move.name),
          abilities: pokeRes.abilities,
        }

        setData(pokeData);
      });
    
    setIsLoading(false);
  } catch (error) {
    setError(error);
    Alert.alert('no pokemons', 'No pokemon was found');
  } finally {
    setIsLoading(false);
  }
 }

 useEffect(() => {
  getPokemon();
 }, []);

 return { data, isLoading, error };
}

export default useGetPokemon;
