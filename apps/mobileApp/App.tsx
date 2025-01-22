
import { colors } from '@repo/ui/theme';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

function App() {
  return (
    <SafeAreaView >
      <Text style={styles.text}>A text with a primary background color</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.primary,
  },
});

export default App;
