import {StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary2,
  },
  headerWrapper: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  header: {
    fontFamily: 'Spartan-Bold',
    fontSize: 30,
    lineHeight: 50,
    color: colors.black,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: colors.secondary,
  },
  textWrapper: {
    flex: 0.7,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%',
  },
  text: {
    fontFamily: 'Spartan-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: colors.darkGray,
    textAlign: 'center',
  },
});
