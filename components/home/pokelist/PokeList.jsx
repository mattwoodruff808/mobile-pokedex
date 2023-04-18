import { View, Text } from 'react-native';

const PokeList = ({ data, isLoading, error }) => {
  if (isLoading) return <View><Text>Loading...</Text></View>

  if (error) return <View><Text>Something went wrong...</Text></View>

  return (
    <View>
      <Text>PokeList Component</Text>
    </View>
  )
}

export default PokeList;
