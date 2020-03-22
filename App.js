import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
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

  return (
    <NavigationContainer>
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
        <Stack.Screen name='CategoryMeal' component={CategoryMealScreen} />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
