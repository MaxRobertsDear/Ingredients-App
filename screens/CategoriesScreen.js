/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('CategoryMeal', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

export default CategoriesScreen;
