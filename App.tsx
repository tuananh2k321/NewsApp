
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Login from './screen/auth/Login'
import Register from './screen/auth/Register'
import BottomTab from './screen/main/BottomTab';
import { Store } from './redux/store/Store';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



export default App;
