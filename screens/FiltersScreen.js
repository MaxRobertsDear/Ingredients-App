import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Filterscreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Filters Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Filterscreen;
