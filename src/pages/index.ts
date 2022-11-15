import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Routes from '../router/routes';
import Main from './Main';

interface PageType {
  key: string;
  name: Routes;
  component: React.ComponentType;
  options?: NativeStackNavigationOptions;
}

const Pages: PageType[] = [
  {
    key: Routes.Main.toString(),
    name: Routes.Main,
    component: Main,
    options: {
      headerShown: false,
    },
  },
];

export default Pages;
