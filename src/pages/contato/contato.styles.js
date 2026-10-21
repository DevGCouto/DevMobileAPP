import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  card: {
    backgroundColor: colors.cardBg,
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 6,
    borderLeftColor: colors.primary,
  },
  companyName: {
    fontSize: fonts.title,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  info: {
    fontSize: fonts.regular,
    color: colors.text,
    marginBottom: 12,
  },
});