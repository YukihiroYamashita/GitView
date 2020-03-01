import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './src/pages/Search'
import User from './src/pages/User'
import Web from './src/pages/Web'

const Stack = createStackNavigator();

export default function App() {
  const options = {
    headerMode: 'none'
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search" headerMode="none">
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='Web' component={Web} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
