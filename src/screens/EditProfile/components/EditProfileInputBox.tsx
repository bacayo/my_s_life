import {View, Text, StyleSheet, ColorValue} from 'react-native';
import React from 'react';
import {colors} from '../../../infrastructure/theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
  title: string | number;
  icon: boolean;
  iconName: string;
  iconColor?: number | ColorValue | undefined;
  titleColor: ColorValue | undefined;
};

const EditProfileInputBox = ({
  title,
  icon,
  titleColor,
  iconName,
  iconColor,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[styles.title, {color: titleColor}]}>
        {title}
      </Text>
      {icon && (
        <View style={styles.iconView}>
          <Icon name={iconName} size={16} color={iconColor} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Spartan-SemiBold',
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },

  iconView: {
    marginRight: '5%',
  },
});

export default EditProfileInputBox;
