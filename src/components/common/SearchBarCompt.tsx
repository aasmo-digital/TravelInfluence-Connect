import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import imageIndex from '../../assets/images/imageIndex';
import {Colors} from '../../constants';

type SearchBarComptProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
};

const SearchBarCompt: React.FC<SearchBarComptProps> = ({
  placeholder = 'Search...',
  onChangeText,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleClear = () => {
    setSearchText('');
    onChangeText && onChangeText(''); // notify parent if needed
  };

  const handleChange = (text: string) => {
    setSearchText(text);
    onChangeText && onChangeText(text);
  };

  return (
    <View style={styles.searchBar}>
      {/* Search Icon on Left */}
      <Image
        source={imageIndex?.search} // put your search icon here
        style={styles.icon}
      />

      {/* Text Input */}
      <TextInput
        value={searchText}
        onChangeText={handleChange}
        placeholder={placeholder}
        style={styles.searchInput}
        placeholderTextColor={Colors.gray}
      />

      {/* Clear Icon on Right (only when text is not empty) */}
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <Image
            source={imageIndex?.close} // put your cross icon here
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBarCompt;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors?.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: Colors?.black,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: Colors.gray,
  },
});
