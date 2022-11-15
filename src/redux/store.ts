import {configureStore} from '@reduxjs/toolkit';
import {statisticsApi} from './api/statisticAPI';

const store = configureStore({
  reducer: {
    [statisticsApi.reducerPath]: statisticsApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(statisticsApi.middleware),
});

export default store;
