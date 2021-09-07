import Statistic from '../../../../../types/Statistic';

export interface StatisticsResponse {
  errors: any[];
  get: string;
  parameters: any[];
  response: Statistic[];
}
