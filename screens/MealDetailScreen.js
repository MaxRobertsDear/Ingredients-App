/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Meal Details Screen</Text>
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
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

export default MealDetailScreen;
