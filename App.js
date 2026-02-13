import Login from './src/pages/Login/Login';
import './global.css';
import Cadastro from './src/pages/Cadastro/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
