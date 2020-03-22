/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({ title: selectedMeal.title });
  });
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Go Back'
        onPress={() => {
          navigation.goBack();
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
