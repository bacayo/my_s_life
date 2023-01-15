import {
  Text,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';

type Props = {
  title: string;
  styleTitle: StyleProp<TextStyle>;
  styleButton:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

const UserButton = ({...props}: Props) => {
  return (
    <Pressable onPress={props.onPress} style={props.styleButton}>
      <Text style={props.styleTitle}>{props.title}</Text>
    </Pressable>
  );
};

export default UserButton;
