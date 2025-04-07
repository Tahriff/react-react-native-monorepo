import type {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export const Button = ({
  onPress,
  children,
}: {
  onPress: () => void;
  children: ReactNode;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
  },
});
