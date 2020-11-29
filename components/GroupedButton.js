import React from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Example from './Example';
const GroupedButton = ({ colors, navigation, paletteName }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ColorPalette', {
          paletteName,
          colors,
        })
      }
    >
      <Text style={styles.text}>{paletteName}</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => <Example hexCode={item.hexCode} />}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  list: {
    marginLeft: 10,
  },
});

export default GroupedButton;
