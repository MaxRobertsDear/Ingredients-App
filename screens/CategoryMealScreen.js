/* eslint-disable react/prop-types */
import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoryMealScreen;
