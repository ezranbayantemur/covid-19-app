import {StyleSheet, Dimensions} from 'react-native';
import {colors, spacing, typography} from '@style';

const deviceSize = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    padding: spacing.SMALL,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: spacing.MEDIUM,
  },
  right_top_section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  continent: {
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
    color: colors.DARK_GRAY,
    fontStyle: 'italic',
  },
  country: {
    maxWidth: deviceSize.width * 0.5,
    color: colors.BLACK,
    fontSize: typography.BIG,
  },
  left_top_section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    paddingVertical: spacing.SMALL,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  death_toll: {
    color: colors.BLACK,
    fontSize: typography.BIG,
    marginRight: spacing.SMALL,
  },
  new_death_toll: {
    color: colors.RED,
    fontSize: typography.SMALL,
    marginRight: spacing.SMALL,
  },
});
