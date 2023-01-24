import React from 'react';
import {SafeAreaView, FlatList, Button, ListRenderItem} from 'react-native';
import {useSelector} from 'react-redux';
import {Statistic} from '@types';
import {StaticItem, Separator, SearchBar} from '@components';
import {useNavigation} from '@react-navigation/native';
import {StatisticStateProps} from 'src/redux/features/statistic/types';
import Routes from '../../router/routes';
import styles from './General.styles';

const General = () => {
  const navigation = useNavigation();
  const {statistics} = useSelector<any, StatisticStateProps>(
    state => state.statistics,
  );

  const renderStatistic: ListRenderItem<Statistic> = ({item, index}) => (
    <StaticItem data={item} index={index} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Map"
        onPress={() => navigation.navigate(Routes.WorldMap)}
      />
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
