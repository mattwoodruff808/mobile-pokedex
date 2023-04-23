import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Stack, useSearchParams } from 'expo-router';

import useGetPokemon from '../../hooks/useGetPokemon';

const Pokemon = () => {
  const params = useSearchParams();
  const { data, isLoading, error } = useGetPokemon(params.id);
  console.log('DATA:', data);

  return (
    <SafeAreaView>
      <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: '#3363af',
          },
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerTitle: '',
          headerRight: () => (
            <Text style={styles.headerText}>Power Off</Text>
          ),
        }}
      />

      <Text>{params.id}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
  },
});

export default Pokemon;
