import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Statistic, StatisticResponse} from '@types';
import Config from 'react-native-config';

const {API_KEY, API_HOST, API_URL} = Config;

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: {'X-RapidAPI-Key': API_KEY!, 'X-RapidAPI-Host': API_HOST!},
  }),
  endpoints: builder => ({
    getAllStatistics: builder.query<Statistic[], void>({
      query: () => '/statistics',
      transformResponse: (res: StatisticResponse) => res.response,
    }),
  }),
});

export const {useGetAllStatisticsQuery} = statisticsApi;
