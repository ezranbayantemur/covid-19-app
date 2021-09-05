import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './worldMapRoutes';
import WorldMap from '../../pages/WorldMapPage/WorldMap';

const Stack = createStackNavigator();

export default function ClientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.WORLDMAP_SCREEN} component={WorldMap} />
    </Stack.Navigator>
  );
}
