import React from 'react';
import { View, StyleSheet } from 'react-native';

const Example = ({ hexCode }) => {
  const color = {
    backgroundColor: hexCode,
  };
  return <View style={[styles.container, color]} />;
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
});

export default Example;
