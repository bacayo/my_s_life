import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchBoxWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  seperator: {
    marginTop: 8,
  },
});
