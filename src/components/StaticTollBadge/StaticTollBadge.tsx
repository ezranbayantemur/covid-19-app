import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './StaticTollBadge.styles';
import {StaticTollBadgeProps} from './types';

const FIXED_POINT = 2;

const StaticTollBadge = ({color, count, approximate}: StaticTollBadgeProps) => {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.approximate}>
        (%{approximate.toFixed(FIXED_POINT)})
      </Text>
    </View>
  );
};

export default memo(StaticTollBadge);
