import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputWrapper: {
    gap: 15,
    marginHorizontal: 15,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.4,
  },
  textWrapper: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomWrapperOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontFamily: 'Spartan-SemiBold',
    color: colors.black,
    lineHeight: 30,
    textAlign: 'center',
    paddingVertical: 2,
  },
  signInBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 143,
    paddingVertical: 16,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBtnTitle: {
    fontFamily: 'Spartan-Medium',
    fontSize: 16,
    color: colors.black,
  },
  bottomWrapperItemsText: {
    fontSize: 12,
    fontFamily: 'Spartan-Medium',
    lineHeight: 16,
    color: '#535A73',
  },
});
