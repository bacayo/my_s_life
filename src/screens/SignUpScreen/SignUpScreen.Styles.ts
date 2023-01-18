import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerWrapper: {
    alignSelf: 'center',
    flex: 0.3,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 28,
    fontFamily: 'Spartan-SemiBold',
    lineHeight: 31,
    textAlign: 'center',
    color: colors.black,
  },
  inputWrapper: {
    flex: 0.7,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 143,
    paddingVertical: 16,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  buttonTitle: {
    fontFamily: 'Spartan-Medium',
    fontSize: 16,
    color: colors.black,
  },
});
