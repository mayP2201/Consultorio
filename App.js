import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/Screens/RegisterScreen';
import RecoverPassword from './src/Screens/RecoverPasswordScreen';
import Code from './src/Screens/CodeScreen';
import NewPassword from './src/Screens/NewPasswordScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='RecoverPassword' component={RecoverPassword} options={{ headerShown: false }} />
        <Stack.Screen name='Code' component={Code} options={{ headerShown: false }} />
        <Stack.Screen name='NewPassword' component={NewPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
