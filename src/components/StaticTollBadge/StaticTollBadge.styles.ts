import {StyleSheet} from 'react-native';
import {colors, spacing, typography} from '@style';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  count: {
    color: colors.BLACK,
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
  },
  approximate: {
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
  },
});
