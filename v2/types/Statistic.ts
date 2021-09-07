export default interface Statistic {
  continent: string;
  country: string;
  population: number;
  cases: Cases;
  deaths: Deaths;
  tests: Tests;
  day: string;
  time: string;
}

interface Cases extends Partial<Status> {}
interface Tests extends Pick<Partial<Status>, '1M_pop' | 'total'> {}
interface Deaths extends Pick<Partial<Status>, 'new' | '1M_pop' | 'total'> {}

interface Status {
  new: string;
  active: number;
  critical: number;
  recovered: number;
  '1M_pop': string;
  total: number;
}
