import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerBtn: {
    backgroundColor: colors.primary,
    width: '100%',
  },
  headerBtnTitle: {
    color: colors.darkGray,
    fontSize: 16,
    fontFamily: 'Spartan-SemiBold',
    textAlign: 'left',
  },
  terms: {
    marginHorizontal: 15,
    marginTop: 15,
    gap: 10,
  },
  text: {
    color: colors.darkGray,
    fontSize: 14,
    fontFamily: 'Spartan-SemiBold',
    lineHeight: 20,
  },
});
