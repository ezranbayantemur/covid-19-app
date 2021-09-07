import React from 'react';
import StatisticsScreen from './layout';
import useStatistic from './hooks/useStatistic';

function Statistics() {
  const {data} = useStatistic();

  console.log(data);

  return <StatisticsScreen />;
}

export default Statistics;
