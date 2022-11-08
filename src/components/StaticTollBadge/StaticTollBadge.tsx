import React from 'react';
import {View, Text} from 'react-native';
import numeral from 'numeral';
import styles from './StaticTollBadge.styles';
import {StaticTollBadgeProps} from './StaticTollBadge.types';

const StaticTollBadge = ({color, count, approximate}: StaticTollBadgeProps) => {
  const formattedCount = numeral(count).format('0,0');

  return (
    <View style={styles.container}>
      <View style={[styles.dot, {backgroundColor: color}]} />
      <Text style={styles.count}>{formattedCount}</Text>
      <Text style={[styles.approximate, {color}]}>(%{approximate})</Text>
    </View>
  );
};

export default StaticTollBadge;
