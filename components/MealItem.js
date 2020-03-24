import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.imageURI }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    justifyContent: 'space-around',
    height: '15%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    textAlign: 'center',
  },
});

MealItem.propTypes = {
  onSelectMeal: PropTypes.func,
  title: PropTypes.string,
  duration: PropTypes.number,
  complexity: PropTypes.string,
  affordability: PropTypes.string,
  imageURI: PropTypes.string,
};

export default MealItem;
