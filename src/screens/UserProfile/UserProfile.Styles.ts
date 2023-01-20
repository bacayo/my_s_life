import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  midContentWrapper: {
    flex: 0.7,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginTop: '5%',
  },
  midContentHeader: {
    color: colors.dark,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    letterSpacing: -0.29,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  description: {
    color: colors.gray,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    letterSpacing: -0.29,
  },
  tagWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  btn: {
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 41,
    borderRadius: 5,
  },
  btnTitle: {
    color: colors.white,
    fontFamily: 'Spartan-SemiBold',
    fontSize: 14,
  },
  profileInfoWrapper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});