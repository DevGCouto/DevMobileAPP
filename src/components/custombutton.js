import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function CustomButton({ title, onPress, type = 'primary' }) {
  const isPrimary = type === 'primary';
  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.bgPrimary : styles.bgSecondary]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textSecondary]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  bgPrimary: { backgroundColor: colors.accent },
  bgSecondary: { backgroundColor: colors.primary },
  text: { fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5, textTransform: 'uppercase' },
  textPrimary: { color: colors.primary },
  textSecondary: { color: colors.white },
});