import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import styles from './pokelist.style';

const PokeList = ({ data, isLoading, error, router }) => {
  if (isLoading) return <View><Text>Loading...</Text></View>

  if (error) return <View><Text>Something went wrong...</Text></View>

  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              style={styles.card} 
              onPress={() => router.push(`/pokemon/${item.name}`)} >
              <Image 
                style={styles.cardImage}
                source={{ uri: item.sprite, }}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

export default PokeList;
