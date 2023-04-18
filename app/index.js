import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import useGetPokemons from '../hooks/useGetPokemons';

import Search from '../components/home/search/Search';
import PokeList from '../components/home/pokelist/PokeList';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const router = useRouter();
  const { data, isLoading, error } = useGetPokemons();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen 
        options={{
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => (
            <Text>Ash Ketchum</Text>
          ),
          headerRight: () => (
            <Text>Power Off</Text>
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Text>Pokedex Title</Text>

          <Search 
            inputText={inputText} 
            setInputText={setInputText}
          />

          <PokeList 
            data={data.filter((d) => {
              return inputText === '' ? d : d.name.includes(inputText);
            })}
            isLoading={isLoading} 
            error={error} 
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    padding: 10,
  },
});

export default Home;
