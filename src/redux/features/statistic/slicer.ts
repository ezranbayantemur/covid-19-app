import {createSlice} from '@reduxjs/toolkit';
import initialState from './initialState';
import getAllStatistic from './thunks/getAllStatistics';

export default createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllStatistic.pending, state => {
      state.statisticPending = true;
    });
    builder.addCase(getAllStatistic.fulfilled, (state, action) => {
      state.statisticPending = false;
      state.statistics = action.payload.sort(
        (a, b) => b.cases.total - a.cases.total,
      );
    });
    builder.addCase(getAllStatistic.rejected, (state, action) => {
      state.statisticPending = false;
      state.statisticError = action.error.message;
    });
  },
});
