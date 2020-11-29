import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text style={styles.text}>Hello wolrd</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
