import React, {useEffect, useState, memo} from 'react';
import {View, TextInput, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';
import Separator from '../Separator';
import styles from './SearchBar.styles';
import {search} from '../../redux/features/statistic';

const DEBOUNCE_WAIT = 500;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const debouncedOnChange = useDebouncedCallback(setSearchValue, DEBOUNCE_WAIT);

  useEffect(() => {
    if (searchValue === undefined) {
      return;
    }

    dispatch(search(searchValue));
  }, [dispatch, searchValue]);

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
      <Separator />
    </View>
  );
};

export default memo(SearchBar);
