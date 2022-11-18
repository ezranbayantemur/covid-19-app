import React, {memo} from 'react';
import {View, Text} from 'react-native';
import numeral from 'numeral';
import {colors} from '@style';
import {StaticTollBadge} from '@components';
import StaticItemProps from './types';
import styles from './StaticItem.styles';

const PERCENT = 100;

const StaticItem = ({
  data: {cases, continent, country, deaths},
}: StaticItemProps) => {
  const deathPerCase = (deaths.total / cases.total) * PERCENT;
  const recoveryPerCase = (cases.recovered / cases.total) * PERCENT;

  const formattedCases = numeral(cases.total).format('0.00 a').toUpperCase();
  const formattedNewCases = numeral(cases.new).format('0a');
  const formattedDeaths = numeral(deaths.total).format('0.000a');
  const formattedRecovered = numeral(cases.recovered).format('0.000a');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.right_top_section}>
          <Text style={styles.country}>{country}</Text>
          {!!continent && <Text style={styles.continent}>({continent})</Text>}
        </View>
        <View style={styles.left_top_section}>
          {!!cases.new && (
            <Text style={styles.new_death_toll}>(+{formattedNewCases})</Text>
          )}
          <Text style={styles.death_toll}>{formattedCases}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <StaticTollBadge
          color={colors.RED}
          count={formattedDeaths}
          approximate={deathPerCase}
        />
        <StaticTollBadge
          color={colors.GREEN}
          count={formattedRecovered}
          approximate={recoveryPerCase}
        />
      </View>
    </View>
  );
};

export default memo(StaticItem);
