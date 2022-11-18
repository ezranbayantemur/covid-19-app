import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pages from '../pages';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {Pages.map(page => (
          <Stack.Screen {...page} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
