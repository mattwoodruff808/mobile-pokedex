import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

const useGetPokemons = () => {
 const [data, setData] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 const getPokemons = () => {
  setIsLoading(true);

  try {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(res => {
        const pokeArr = res.data.results;
        const mappedPokeArr = pokeArr.map((pokemon) => {
          const spriteIndex = pokemon.url.split('/')[6];

          return {
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteIndex}.png`,
            url: pokemon.url,
          }
        });
        setData(mappedPokeArr);
      });
    
    setIsLoading(false);
  } catch (error) {
    setError(error);
    Alert.alert('no pokemons', 'No pokemons were found');
  } finally {
    setIsLoading(false);
  }
 }

 useEffect(() => {
  getPokemons();
 }, []);

 return { data, isLoading, error };
}

export default useGetPokemons;
