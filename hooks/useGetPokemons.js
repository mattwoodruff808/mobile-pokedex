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
      .get('https://pokeapi.co/api/v2/pokemon?limit=152&offset=0')
      .then(res => setData(res.data));
    
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
