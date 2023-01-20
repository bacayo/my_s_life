import {View, FlatList} from 'react-native';
import React from 'react';
import {ItemSeperator} from './components/ItemSeperator';
import SearchBox from '../../components/SearchBox';

import styles from './Feed.Styles';
import {DataInterface, profile} from '../../data/profileData';
import {ListRenderItem} from 'react-native';
import ProfileCard from '../../components/ProfileCard';

const Feed = () => {
  const renderProfile: ListRenderItem<DataInterface> = ({item}) => (
    <ProfileCard {...item} />
  );
  return (
    <View style={styles.container}>
      {/* Searchbox */}
      <View style={styles.searchBoxWrapper}>
        <SearchBox />
      </View>
      {/* Item seperator */}
      <View style={styles.seperator}>
        <ItemSeperator />
      </View>
      {/* Profile List */}
      <FlatList
        data={profile}
        renderItem={renderProfile}
        ItemSeparatorComponent={ItemSeperator}
      />
    </View>
  );
};

export default Feed;
