import {configureStore} from '@reduxjs/toolkit';
import statisticSlicer from './features/statistic';

const store = configureStore({
  reducer: {
    statistics: statisticSlicer.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
