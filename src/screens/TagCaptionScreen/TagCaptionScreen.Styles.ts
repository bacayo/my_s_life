import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    gap: 16,
    marginHorizontal: 16,
    marginTop: '5%',
  },
  btn: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '30%',
  },
  btnTitle: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Spartan-SemiBold',
    fontSize: 16,
  },
});
