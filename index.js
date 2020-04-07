/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Wrapper from './src/Wrapper';

AppRegistry.registerComponent(appName, () => Wrapper);
