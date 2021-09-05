import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './staticsRoutes';
import Statics from '../../pages/StaticsPage/Statics';
import Detail from '../../pages/StaticsPage/Detail';

const Stack = createStackNavigator();

export default function ClientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.STATICS_SCREEN} component={Statics} />
      <Stack.Screen name={Routes.DETAIL_SCREEN} component={Detail} />
    </Stack.Navigator>
  );
}
