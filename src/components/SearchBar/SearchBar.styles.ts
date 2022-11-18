import {colors, spacing, typography} from '@style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input_container: {
    flexDirection: 'row',
    padding: spacing.SMALL,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: colors.LIGHT_GRAY,
    padding: spacing.SMALL,
    paddingHorizontal: spacing.NORMAL,
  },
  footer_container: {
    justifyContent: 'space-evenly',
    paddingTop: spacing.SMALL,
    paddingBottom: spacing.MEDIUM,
    flexDirection: 'row',
  },
  death_case_label: {
    color: colors.RED,
    fontSize: typography.SMALL,
    fontWeight: 'bold',
  },
  recover_case_label: {
    color: colors.GREEN,
    fontSize: typography.SMALL,
    fontWeight: 'bold',
  },
});
