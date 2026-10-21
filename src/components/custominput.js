import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { colors } from '../styles/theme';

export default function CustomInput({ label, secureTextEntry, value, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textLight}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', marginBottom: 15 },
  label: { fontSize: 14, color: colors.text, marginBottom: 5, fontWeight: '600' },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    fontSize: 16,
    color: colors.text,
  },
});