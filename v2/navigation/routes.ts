import StaticsRoutes from './StaticsStack/staticsRoutes';
import WorldMapRoutes from './WorldMapStack/worldMapRoutes';

const Routes = {
  ...StaticsRoutes,
  ...WorldMapRoutes,
};

type Routes = typeof Routes;

export default Routes;
