import StaticsRoutes from './StatisticsStack/statisticsRoutes';
import WorldMapRoutes from './WorldMapStack/worldMapRoutes';

const Routes = {
  ...StaticsRoutes,
  ...WorldMapRoutes,
};

type Routes = typeof Routes;

export default Routes;
