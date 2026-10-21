import React, { useState } from 'react';
import { View, Text, Alert, Platform } from 'react-native';
import CustomInput from '../../components/custominput';
import CustomButton from '../../components/custombutton';
import { styles } from './login.styles';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState(''); 

  const CREDENCIAIS_VALIDAS = {
    usuario: 'aluno',
    senha: '123456',
  };

  const exibirAlerta = (titulo, mensagem) => {
    setMensagemErro(mensagem); 
    
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensagem}`); 
    } else {
      Alert.alert(titulo, mensagem); 
    }
  };

  const handleLogin = () => {
    setMensagemErro('');

    if (!usuario.trim()) {
      exibirAlerta('Acesso Restrito', 'Informe o seu ID de Motorista ou Usuário.');
      return;
    }
    if (!senha.trim()) {
      exibirAlerta('Acesso Restrito', 'Informe a sua senha de acesso.');
      return;
    }

    if (usuario === CREDENCIAIS_VALIDAS.usuario && senha === CREDENCIAIS_VALIDAS.senha) {
      setUsuario('');
      setSenha('');
      setMensagemErro('');
      navigation.replace('Home');
    } else {
      exibirAlerta('Erro de Autenticação', 'Usuário ou senha inválidos.');
    }
  };

  const handleLimpar = () => {
    setUsuario('');
    setSenha('');
    setMensagemErro('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.iconHeader}>🚛</Text>
        <Text style={styles.title}>DIMENSÃO TRANSPORTES</Text>
        <Text style={styles.subtitle}>Portal do Motorista & Logística</Text>
      </View>

      <View style={styles.card}>
        <CustomInput
          label="ID de Motorista / Usuário"
          placeholder="Ex: aluno"
          value={usuario}
          onChangeText={(texto) => {
            setUsuario(texto);
            setMensagemErro('');
          }}
        />

        <CustomInput
          label="Senha de Acesso"
          placeholder="Ex: 123456"
          secureTextEntry
          value={senha}
          onChangeText={(texto) => {
            setSenha(texto);
            setMensagemErro('');
          }}
        />

        {/* Exibe mensagem de erro na tela em vermelho caso exista */}
        {mensagemErro !== '' && (
          <Text style={styles.errorText}>{mensagemErro}</Text>
        )}

        <CustomButton title="Iniciar Jornada" onPress={handleLogin} />
        <CustomButton title="Limpar Campos" onPress={handleLimpar} type="secondary" />
      </View>
    </View>
  );
}