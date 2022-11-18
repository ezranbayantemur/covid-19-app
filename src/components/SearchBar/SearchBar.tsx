import React, {useEffect, useState, memo} from 'react';
import {View, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import {Separator} from '@components';
import {search} from '@features/statistic';
import {StatisticStateProps} from '@features/statistic/types';
import styles from './SearchBar.styles';

const DEBOUNCE_WAIT = 500;

const SearchBar = () => {
  const {statistics} = useSelector<any, StatisticStateProps>(
    state => state.statistics,
  );

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const debouncedOnChange = useDebouncedCallback(setSearchValue, DEBOUNCE_WAIT);

  useEffect(() => {
    if (searchValue === undefined) {
      return;
    }

    dispatch(search(searchValue));
  }, [dispatch, searchValue]);

  const updatedTime =
    statistics.length > 0 &&
    !!statistics[0] &&
    !!statistics[0].time &&
    dayjs(statistics[0].time).fromNow();

  return (
    <View>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          onChangeText={debouncedOnChange}
          placeholder="Search a country..."
        />
      </View>
      <View style={styles.footer_container}>
        <Text style={styles.death_case_label}>Death D/Case</Text>
        <Text style={styles.recover_case_label}>Recover R/Case</Text>
      </View>
      {updatedTime && (
        <Text style={styles.time}>Last update {updatedTime}</Text>
      )}
      <Separator />
    </View>
  );
};

SearchBar.whyDidYouRender = true;

export default memo(SearchBar);
