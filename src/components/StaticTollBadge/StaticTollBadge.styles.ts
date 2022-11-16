import {StyleSheet} from 'react-native';
import {colors, spacing, typography} from '@style';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.TINY,
    paddingHorizontal: spacing.SMALL,
    borderRadius: 5,
  },
  count: {
    color: colors.LIGHT_GRAY,
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
    fontWeight: 'bold',
  },
  approximate: {
    color: colors.LIGHT_GRAY,
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
  },
});
