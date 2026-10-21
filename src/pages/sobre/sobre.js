import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CustomButton from '../../components/custombutton';
import { styles } from './sobre.styles';

export default function Sobre({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.appName}>🚚 Dimensão Tranportes</Text>
        <Text style={styles.text}>
          Plataforma de gestão logística para transporte rodoviário de cargas pesadas e fracionadas.
        </Text>
        <Text style={styles.tag}>Versão do Sistema: 2.4 (Logistics Edition)</Text>

        <Text style={styles.sectionTitle}>Nossa Missão</Text>
        <Text style={styles.text}>Garantir pontualidade e segurança no escoamento de cargas por todo o país.</Text>

        <Text style={styles.sectionTitle}>Visão Operacional</Text>
        <Text style={styles.text}>Liderar a digitalização e o monitoramento em tempo real do setor de transporte pesados.</Text>

        <Text style={styles.sectionTitle}>Valores da Frota</Text>
        <Text style={styles.text}>• Segurança em Primeiro Lugar{"\n"}• Eficiência Energética{"\n"}• Compromisso com a Carga</Text>
      </View>

      <CustomButton title="Voltar ao Painel" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
}