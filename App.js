import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login/login';
import Home from './src/pages/home/home';
import Sobre from './src/pages/sobre/sobre';
import Contato from './src/pages/contato/contato';
import { colors } from './src/styles/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.accent,
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: '🚛 Painel da Frota' }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: '📦 Sobre a Logística' }}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ title: '🚨 Central de Suporte' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}