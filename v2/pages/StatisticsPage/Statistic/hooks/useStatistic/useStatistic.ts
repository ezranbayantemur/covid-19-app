import {useEffect} from 'react';
import useFetch from 'use-http';
import Config from 'react-native-config';
import {StatisticsResponse} from './types';
import Statistic from '../../../../../types/Statistic';

interface UseStatisticReturnType {
  data?: Statistic[];
  loading: boolean;
  error?: Error;
}

function useStatistic(): UseStatisticReturnType {
  const {response, loading, error, get} = useFetch<StatisticsResponse>(
    Config.COVID_API,
    {
      headers: {
        'x-rapidapi-host': Config.X_RAPIDAPI_HOST,
        'x-rapidapi-key': Config.X_RAPIDAPI_KEY,
      },
    },
  );

  useEffect(() => {
    get('/statistics');
  }, [get]);

  return {
    data: response.data?.response,
    loading: loading,
    error: error,
  };
}

export default useStatistic;
