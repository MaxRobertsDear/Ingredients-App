/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <CustomHeaderButton
          onPress={() => {
            // eslint-disable-next-line no-undef
            console.log('marked as favourite');
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Go Back to Categories'
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
