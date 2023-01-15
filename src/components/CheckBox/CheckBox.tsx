import {Checkbox} from 'react-native-paper';
import React from 'react';
import {colors} from '../../infrastructure/theme/colors';

type Props = {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBox = ({checked, setChecked}: Props) => {
  return (
    <Checkbox
      color={colors.primary}
      uncheckedColor={colors.primary}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CheckBox;
