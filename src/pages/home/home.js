import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/custombutton';
import { styles } from './home.styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.statusCard}>
        <Text style={styles.statusBadge}>🟢 FROTA OPERACIONAL</Text>
        <Text style={styles.welcomeText}>Central de Operações</Text>
        <Text style={styles.description}>
          Gestão de fretes, monitoramento de rotas e suporte em tempo real para transporte pesado rodoviário.
        </Text>
      </View>

      <View style={styles.menuContainer}>
        <CustomButton title="📦 Dados da Frota (Sobre)" onPress={() => navigation.navigate('Sobre')} />
        <CustomButton title="📞 Central de Risco (Contato)" onPress={() => navigation.navigate('Contato')} />
        <CustomButton
          title="Encerrar Turno (Logout)"
          onPress={() => navigation.replace('Login')}
          type="secondary"
        />
      </View>
    </View>
  );
}