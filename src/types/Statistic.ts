interface Statistic {
  continent: string;
  country: string;
  population: number | null;
  cases: Case;
  deaths: Pick<Case, 'new' | '1M_pop' | 'total'>;
  tests: Pick<Case, '1M_pop' | 'total'>;
  day: string;
  time: string;
}

interface Case {
  new: string | null;
  active: number;
  critical: number;
  recovered: number;
  '1M_pop': string;
  total: number;
}

interface StatisticResponse {
  errors: string[];
  get: string;
  parameters: any[];
  response: Statistic[];
  results: number;
}

export type {StatisticResponse};
export default Statistic;
