import React from 'react';
import {View, Text} from 'react-native';
import numeral from 'numeral';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import {colors} from '@style';
import {StaticTollBadge} from '@components';
import StaticItemProps from './types';
import styles from './StaticItem.styles';

const StaticItem = ({
  data: {cases, continent, country, deaths, population},
}: StaticItemProps) => {
  const deathPerCase = deaths.total / cases.total;
  const casePerPopulation = cases.total / population;
  const recoveryPerCase = cases.recovered / cases.total;
  const formattedCases = numeral(cases.total).format('0,0');
  const formattedDeaths = numeral(deaths.total).format('0,0');
  const formattedRecovered = numeral(cases.recovered).format('0,0');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.right_top_section}>
          <Text style={styles.country}>{country}</Text>
          {!!continent && <Text style={styles.continent}>({continent})</Text>}
        </View>
        <View style={styles.left_top_section}>
          <Text style={styles.death_toll}>{formattedCases}</Text>
          {!!cases.new && (
            <Text style={styles.new_death_toll}>({cases.new})</Text>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <StaticTollBadge
          color={colors.ORANGE}
          count={formattedCases}
          approximate={casePerPopulation}
        />
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

export default StaticItem;
