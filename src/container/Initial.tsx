import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllStatistics} from '../redux/features/statistic';
import {AppDispatch} from '../redux/store';
import {StatisticStateProps} from '../redux/features/statistic/types';

interface InitialProps {
  children: JSX.Element;
}

const Splash = () => <View style={{flex: 1, backgroundColor: 'tomato'}} />;

export default function Initial({children}: InitialProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const {statisticPending} = useSelector<any, StatisticStateProps>(
    state => state.statistics,
  );

  useEffect(() => {
    dispatch(getAllStatistics());
  }, [dispatch]);

  if (statisticPending) {
    return <Splash />;
  }
  return children;
}
