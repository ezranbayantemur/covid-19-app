import {View, Text} from 'react-native';
import React from 'react';
import styles from './StaticItem.styles';
import {StaticTollBadge} from '@components';
import {colors} from '@style';

const StaticItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.right_top_section}>
          <Text style={styles.country}>World</Text>
          <Text style={styles.time}>birkaç saniye önce</Text>
        </View>
        <View style={styles.left_top_section}>
          <Text style={styles.death_toll}>1,386,161</Text>
          <Text style={styles.new_death_toll}>(+4360)</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <StaticTollBadge
          color={colors.ORANGE}
          count={1386161}
          approximate={2059}
        />
        <StaticTollBadge color={colors.RED} count={79014} approximate={570} />
        <StaticTollBadge
          color={colors.GREEN}
          count={297379}
          approximate={2145}
        />
      </View>
    </View>
  );
};

export default StaticItem;
