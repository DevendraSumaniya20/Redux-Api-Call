import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ApiComponents from './src/ApiComponents';

const App = () => {
  return (
    <View style={styles.main}>
      <ApiComponents />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
