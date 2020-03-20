import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{ backgroundColor: props.color }}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

CategoryGridTile.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  onSelect: PropTypes.func,
};

export default CategoryGridTile;
