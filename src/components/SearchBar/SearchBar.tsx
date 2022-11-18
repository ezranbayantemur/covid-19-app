import React, {useEffect, useState, memo} from 'react';
import {View, TextInput, Text} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import Separator from '../Separator';
import styles from './SearchBar.styles';

const DEBOUNCE_WAIT = 500;

interface SearchBarProps {
  onSearch: (value?: string) => void;
}

const SearchBar = ({onSearch}: SearchBarProps) => {
  const [search, setSearch] = useState<string>();
  const debouncedOnChange = useDebouncedCallback(setSearch, DEBOUNCE_WAIT);

  useEffect(() => {
    onSearch(search);
  }, [search, onSearch]);

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
