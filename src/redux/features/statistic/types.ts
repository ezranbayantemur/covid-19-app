import {Statistic} from '@types';

interface StatisticStateProps {
  statistics: Statistic[];
  statisticPending: boolean;
  statisticError: string | null | undefined;
}

interface StatisticDispatchProps {
  getStatistics: () => void;
}

export type {StatisticStateProps, StatisticDispatchProps};
