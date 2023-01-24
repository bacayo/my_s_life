import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {colors} from '../../../infrastructure/theme/colors';
import Tag from '../../SignUpDetail/components/Tag';
import {DISEASEDATA} from '../../../data/diseases';
import {DiseaseInterface} from '../../../infrastructure/types/types';

type Props = {
  placeholder: string;
  icon: string;
  showIcon?: boolean;
  numOfLines?: number;
};

const TagCaptionInputBox = ({
  placeholder,
  icon,
  numOfLines = 1,
  showIcon,
}: Props) => {
  const [query, setQuery] = useState(false);

  //Render disease tags
  const renderDiseases: ListRenderItem<DiseaseInterface> = ({item}) => (
    <View style={styles.tagWrapper}>
      <Tag title={item.disease} />
    </View>
  );

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#BDBDBD"
          numberOfLines={numOfLines}
          style={!query ? styles.textInput : styles.textInputQuery}
        />
        {showIcon && (
          <Icon
            onPress={() => setQuery(!query)}
            style={styles.icon}
            name={icon}
            size={20}
            color={!query ? colors.gray : colors.black}
          />
        )}
      </View>
      {/* Categories */}
      {query && (
        <View style={styles.list}>
          <FlatList
            numColumns={2}
            data={DISEASEDATA}
            renderItem={renderDiseases}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textInputQuery: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  icon: {
    position: 'relative',
    right: '60%',
    alignSelf: 'center',
  },
  tagWrapper: {
    marginHorizontal: 4,
    marginVertical: 4,
    flexShrink: 1,
  },
  list: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
  },
});

export default TagCaptionInputBox;
