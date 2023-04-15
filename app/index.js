import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import Search from '../components/home/search/Search';
import PokeList from '../components/home/pokelist/PokeList';

const Home = () => {
  const router = useRouter();

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
          <Search />
          <PokeList />
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
