import Login from './src/pages/Login/Login';
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
        <Stack.Screen name='Cadastro' component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
