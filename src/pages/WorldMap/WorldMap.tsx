import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './WorldMap.styles';

const WorldMap = () => {
  const {statistics} = useSelector(s => s.statistics);
  return (
    <SafeAreaView style={styles.container}>
      <Text>WorldMap</Text>
      {statistics.map(s => (
        <Text>{s.country}</Text>
      ))}
    </SafeAreaView>
  );
};

export default WorldMap;
