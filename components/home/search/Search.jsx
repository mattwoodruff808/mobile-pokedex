import { View, TextInput } from 'react-native';

import styles from './search.style';

const Search = ({ inputText, setInputText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        placeholder='Search Pokemon...'
        value={inputText}
      />
    </View>
  )
}

export default Search;
