import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  headerWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: colors.darkGray,
    fontSize: 28,
    fontFamily: 'Spartan-SemiBold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  contentWrapper: {
    flex: 0.7,
    gap: 30,
  },
  verificationMessage: {
    color: colors.black,
    fontFamily: 'Spartan-Medium',
    fontSize: 14,
    lineHeight: 20,
    width: '90%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
  },
  messageWrapper: {
    alignItems: 'center',
    gap: 10,
  },
  questionText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  valBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 143,
    paddingVertical: 16,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  valBtnTitle: {
    fontFamily: 'Spartan-Medium',
    fontSize: 16,
    color: colors.black,
    width: 150,
    textAlign: 'center',
  },
});
