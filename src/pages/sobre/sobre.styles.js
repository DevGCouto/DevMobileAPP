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
    borderTopWidth: 4,
    borderTopColor: colors.primary,
  },
  appName: {
    fontSize: fonts.title,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  tag: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.textLight,
    backgroundColor: '#E2E8F0',
    padding: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  text: {
    fontSize: fonts.regular,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: fonts.subtitle,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 14,
    marginBottom: 4,
  },
});