import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import linking from './src/linking';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
