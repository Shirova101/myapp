/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import appConfig from '../app.json'; // Import the entire JSON object

const appName = appConfig.name; // Access 'name' property
const displayName = appConfig.displayName;
console.log(appName); // Output: MyApp
console.log(displayName); // Output: MyApp
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
  