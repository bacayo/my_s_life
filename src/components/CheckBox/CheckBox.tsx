import {Checkbox} from 'react-native-paper';
import React from 'react';

type Props = {
  checked: boolean | null;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  color: string | undefined;
  uncheckedColor: string | undefined;
};

const CheckBox = ({checked, setChecked, color, uncheckedColor}: Props) => {
  return (
    <Checkbox
      color={color}
      uncheckedColor={uncheckedColor}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default CheckBox;
