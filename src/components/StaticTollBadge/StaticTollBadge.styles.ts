import {StyleSheet} from 'react-native';
import {spacing, typography} from '@style';

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
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
  },
  approximate: {
    marginLeft: spacing.SMALL,
    fontSize: typography.SMALL,
  },
});
