import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StaticsStack from './StaticsStack';
import WorldMapStack from './WorldMapStack';

import Routes from './routes';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={StaticsStack} name={Routes.STATICS_STACK} />
        <Stack.Screen component={WorldMapStack} name={Routes.WORLDMAP_STACK} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
