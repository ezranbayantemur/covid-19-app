import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './statisticsRoutes';
import Statistic from '../../pages/StatisticsPage/Statistic';
import Detail from '../../pages/StatisticsPage/Detail';

const Stack = createStackNavigator();

export default function ClientStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.STATISTICS_SCREEN} component={Statistic} />
      <Stack.Screen name={Routes.DETAIL_SCREEN} component={Detail} />
    </Stack.Navigator>
  );
}
