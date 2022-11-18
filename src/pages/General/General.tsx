import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Statistic} from '@types';
import {StaticItem, Separator, SearchBar} from '@components';
import styles from './General.styles';
import {useSelector} from 'react-redux';
import {StatisticStateProps} from 'src/redux/features/statistic/types';

const General = () => {
  const {statistics} = useSelector<any, StatisticStateProps>(
    state => state.statistics,
  );

  const renderStatistic = ({item}: {item: Statistic}) => (
    <StaticItem data={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={statistics}
        renderItem={renderStatistic}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={SearchBar}
      />
    </SafeAreaView>
  );
};

export default General;
