import React from 'react';
import {Searchbar} from 'react-native-paper';

import styles from './SearchBox.Styles';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      placeholderTextColor="#93959c"
      style={styles.searchBox}
    />
  );
};

export default SearchBox;
