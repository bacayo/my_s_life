import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    gap: 4,
  },
  topWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  //flex
  nameWrapper: {
    gap: 5,
    paddingVertical: 8,
  },
  name: {
    color: colors.darkGray,
    fontSize: 14,
    fontFamily: 'Spartan-SemiBold',
  },
  lastSeen: {
    fontSize: 12,
    fontFamily: 'Spartan-Medium',
    color: '#9a9a9a',
  },
  headerText: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    color: colors.dark,
    fontSize: 14,
    fontFamily: 'Spartan-SemiBold',
  },
  arrowRightWrapper: {
    padding: 8,
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginRight: 4,
    alignSelf: 'center',
  },
  description: {
    color: colors.gray,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Spartan-Medium',
  },
  likes: {
    fontSize: 14,
    fontFamily: 'Spartan-Medium',
    color: colors.darkGray,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  social: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  reply: {},
  diseaseWrapper: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    width: '30%',
  },
  disease: {
    fontSize: 11,
    fontFamily: 'Spartan-SemiBold',
    color: colors.white,
    textAlign: 'center',
  },
});
