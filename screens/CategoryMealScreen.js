/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find(item => item.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text>This is the Categories Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Click me'
        onPress={() => {
          navigation.push('MealDetails');
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
    alignContent: 'flex-end',
  },
});

export default CategoryMealScreen;
