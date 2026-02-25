import Login from './src/pages/Login/Login';
import './global.css';
import Cadastro from './src/pages/Cadastro/Cadastro';
import Home from './src/pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/pages/Splash/Splash';
const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Splash' component={Splash} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
