import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  diseaseWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignSelf: 'center',
    width: '30%',
  },
  btnTitle: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Spartan-SemiBold',
    fontSize: 14,
  },
  userProfileHeaderWrapper: {
    height: 200,
  },
  midContentWrapper: {
    marginHorizontal: 15,
    gap: 10,
    marginTop: '5%',
  },
  btnWrapper: {
    marginBottom: '5%',
  },
});
