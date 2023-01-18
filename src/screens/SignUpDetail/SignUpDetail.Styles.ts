import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    marginHorizontal: 15,
    marginTop: 50,
    gap: 30,
  },
  headerWrapper: {
    width: '80%',
    alignSelf: 'center',
  },
  header: {
    fontSize: 28,
    lineHeight: 31,
    fontFamily: 'Spartan-SemiBold',
    color: colors.black,
    textAlign: 'center',
  },
  genderHeader: {
    fontSize: 16,
    fontFamily: 'Spartan-Medium',
    color: colors.darkGray,
  },
  choiceWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  genderWrapper: {
    gap: 10,
  },
  genderButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  selecetedGenderButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.dark,
  },
  choiceText: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: 'Spartan-SemiBold',
    textAlign: 'center',
  },
  selectedText: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: 'Spartan-SemiBold',
    textAlign: 'center',
  },
  messageWrapper: {
    gap: 16,
  },
  interestSection: {
    gap: 16,
  },
  interestsWrapper: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  interestText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  tags: {
    flexDirection: 'row',
    gap: 10,
  },
  tag: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    padding: 5,
  },
  messageText: {
    fontFamily: 'Spartan-Medium',
    fontSize: 16,
    color: colors.darkGray,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomItemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomItemWrapperText: {
    fontSize: 14,
    fontFamily: 'Spartan-Medium',
    textAlign: 'center',
  },
  gradText: {
    color: colors.dark,
  },
  friendsText: {
    color: colors.gray,
    width: '70%',
  },
  bottomHeader: {
    color: colors.darkGray,
    fontSize: 16,
    fontFamily: 'Spartan-Medium',
    textAlign: 'left',
  },
  tacWrapper: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tocWrapperText: {
    color: colors.darkGray,
    fontSize: 16,
    fontFamily: 'Spartan-Medium',
    width: '70%',
  },
  tocWrapperTextSpan: {
    color: colors.span,
    textDecorationLine: 'underline',
  },
  submitBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 143,
    paddingVertical: 16,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  submitBtnTitle: {
    fontFamily: 'Spartan-Medium',
    fontSize: 16,
    color: colors.black,
  },
  submitButtonWrapper: {
    marginBottom: 8,
  },
});
