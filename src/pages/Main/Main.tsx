import React, {useCallback, useMemo} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Statistic} from '@types';
import {StaticItem, Separator, SearchBar} from '@components';
import styles from './Main.styles';
import {useDispatch, useSelector} from 'react-redux';
import {StatisticStateProps} from 'src/redux/features/statistic/types';
import {search} from '../../redux/features/statistic';

const Main = () => {
  const dispatch = useDispatch();
  const {statistics} = useSelector<any, StatisticStateProps>(
    state => state.statistics,
  );

  const renderStatistic = ({item}: {item: Statistic}) => (
    <StaticItem data={item} />
  );

  const handleSearch = useCallback(
    (searchValue?: string) => dispatch(search(searchValue)),
    [dispatch],
  );

  const ListHeaderComponent = useMemo(
    () => <SearchBar onSearch={handleSearch} />,
    [handleSearch],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={statistics}
        renderItem={renderStatistic}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
};

export default Main;
