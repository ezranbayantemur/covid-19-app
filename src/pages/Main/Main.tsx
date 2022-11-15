import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Statistic} from '@types';
import {StaticItem, Separator} from '@components';
import styles from './Main.styles';
import {useGetAllStatisticsQuery} from '../../redux/api/statisticAPI';

const Main = () => {
  const {data: statistics} = useGetAllStatisticsQuery();

  const renderStatistic = ({item}: {item: Statistic}) => (
    <StaticItem data={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={statistics}
        renderItem={renderStatistic}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

export default Main;
