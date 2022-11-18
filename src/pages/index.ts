import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Routes from '../router/routes';
import General from './General';
import WorldMap from './WorldMap';

interface PageType {
  key: string;
  name: Routes;
  component: React.ComponentType;
  options?: NativeStackNavigationOptions;
}

const Pages: PageType[] = [
  {
    key: Routes.General.toString(),
    name: Routes.General,
    component: General,
  },
  {
    key: Routes.WorldMap.toString(),
    name: Routes.WorldMap,
    component: WorldMap,
  },
];

export default Pages;
