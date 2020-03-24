import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavouritesScreen';
import Colors from './constants/Colors';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  const Stack = createStackNavigator();

  const MealsNavigationController = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Categories'
          component={CategoriesScreen}
          options={{
            title: 'Category Options',
            headerStyle: { backgroundColor: Colors.primaryColor },
            headerTintColor: Colors.accentColor,
          }}
        />
        <Stack.Screen
          name='CategoryMeal'
          component={CategoryMealScreen}
          options={{
            title: 'Category Meal',
            headerTintColor: Colors.accentColor,
          }}
        />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailScreen}
          options={({ route }) => ({
            headerTitle: route.params.name,
            headerTintColor: Colors.accentColor,
          })}
        />
      </Stack.Navigator>
    );
  };

  const FavoritesNavigationController = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={{
            title: 'Your Favorites',
            headerStyle: { backgroundColor: Colors.primaryColor },
            headerTintColor: Colors.accentColor,
          }}
        />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailScreen}
          options={{
            title: 'Meal Details',
            headerTintColor: Colors.accentColor,
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
        }}
      >
        <Tab.Screen name='Meals' component={MealsNavigationController} />
        <Tab.Screen
          name='Favourites'
          component={FavoritesNavigationController}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
