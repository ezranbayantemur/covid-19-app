import {StyleSheet} from 'react-native';
import {colors, spacing, typography} from '@style';

export default StyleSheet.create({
  container: {
    padding: spacing.SMALL,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingVertical: spacing.SMALL,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right_top_section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left_top_section: {
    flexDirection: 'row',
  },
  country: {
    fontSize: typography.BIG,
  },
  time: {
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
    color: 'gray',
  },
  death_toll: {
    fontSize: typography.BIG,
  },
  new_death_toll: {
    color: colors.RED,
    fontSize: typography.MEDIUM,
    marginLeft: spacing.SMALL,
  },
});
