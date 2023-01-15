import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoWrapper: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 89,
    width: '100%',
  },
  logo: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.dark,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '60%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  signUpTitle: {
    color: colors.dark,
    fontFamily: 'Spartan-Medium',
  },
  loginContainer: {
    width: '60%',
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 75,
    paddingVertical: 15,
    alignSelf: 'center',
    borderRadius: 5,
    width: '100%',
  },
  loginButtonTitle: {
    fontFamily: 'Spartan-Medium',
    color: colors.white,
    width: 100,
    alignSelf: 'center',
  },
  accountText: {
    fontFamily: 'Spartan-SemiBold',
    color: colors.black,
    marginBottom: 24,
  },
});
