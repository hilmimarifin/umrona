import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox, Text, View} from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Detail"
          options={{headerShown: false}}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
