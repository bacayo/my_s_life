import {StyleSheet, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../infrastructure/theme/colors';

type Props = {
  title: string;
};

const UserButtonComponent = ({title}: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <Pressable
      onPress={() => setSelected(!selected)}
      style={selected ? styles.selecetedGenderButton : styles.genderButton}>
      <Text style={selected ? styles.selectedText : styles.choiceText}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  genderButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  },
  selectedText: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: 'Spartan-SemiBold',
  },
});

export default UserButtonComponent;
