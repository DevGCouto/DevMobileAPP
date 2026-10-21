import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconHeader: {
    fontSize: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: fonts.brand,
    fontWeight: '900',
    color: colors.accent,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.border,
    textAlign: 'center',
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.cardBg,
    padding: 24,
    borderRadius: 10,
    elevation: 6,
    borderTopWidth: 5,
    borderTopColor: colors.accent,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
});