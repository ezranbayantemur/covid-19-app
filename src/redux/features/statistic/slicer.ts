import Fuse from 'fuse.js';
import {Statistic} from '@types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WritableDraft} from 'immer/dist/internal';
import initialState from './initialState';
import getAllStatistic from './thunks/getAllStatistics';

let fuse: Fuse<WritableDraft<Statistic>> | null = null;

const sortDescending = (a: Statistic, b: Statistic) =>
  b.cases.total - a.cases.total;

export default createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string | undefined>) => {
      if (!fuse) {
        return;
      }

      if (!action.payload) {
        state.statistics = state.allStatistics;
        return;
      }

      const result = fuse.search(action.payload).map(s => s.item);
      state.statistics = result;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllStatistic.pending, state => {
      state.statisticPending = true;
    });
    builder.addCase(getAllStatistic.fulfilled, (state, action) => {
      const sortedStatistics = action.payload.sort(sortDescending);

      // Creating Fuse instance on here for not creating an object on every search
      fuse = new Fuse(sortedStatistics, {
        keys: ['country'],
        threshold: 0.2,
      });

      state.statisticPending = false;
      state.statistics = sortedStatistics;
      state.allStatistics = sortedStatistics;
    });
    builder.addCase(getAllStatistic.rejected, (state, action) => {
      state.statisticPending = false;
      state.statisticError = action.error.message;
    });
  },
});
