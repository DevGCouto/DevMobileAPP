import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  statusCard: {
    backgroundColor: colors.cardBg,
    padding: 20,
    borderRadius: 8,
    borderLeftWidth: 6,
    borderLeftColor: colors.accent,
    marginBottom: 20,
    elevation: 2,
  },
  statusBadge: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 6,
  },
  welcomeText: {
    fontSize: fonts.title,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: fonts.regular,
    color: colors.textLight,
    lineHeight: 22,
  },
  menuContainer: {
    marginTop: 10,
  },
});