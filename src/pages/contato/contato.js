import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../../components/custombutton';
import { styles } from './contato.styles';

export default function Contato({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.companyName}>🚨 Base Operacional & Suporte</Text>
        
        <Text style={styles.info}>
          <Text style={styles.label}>0800 da Frota: </Text>0800 777 5000
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Base Operacional: </Text>(11) 4004-9000
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>E-mail Rastreio: </Text>logistica@dimensao.com.br
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Pátio Principal: </Text>Rodovia dos Bandeirantes, Km 48 - Jundiaí/SP
        </Text>
        <Text style={styles.info}>
          <Text style={styles.label}>Plantão de Emergência: </Text>24 Horas / 7 Dias por semana
        </Text>
      </View>

      <CustomButton title="Voltar ao Painel" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}