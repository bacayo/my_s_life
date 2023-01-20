import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  navbar: {
    backgroundColor: colors.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 19,
    gap: 16,
  },
  navbarText: {
    color: colors.darkGray,
    fontFamily: 'Spartan-SemiBold',
    fontSize: 16,
  },
});
