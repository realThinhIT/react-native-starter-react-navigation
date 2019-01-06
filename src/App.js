import { initRoutes } from './navigation/init';
import { Navigation } from 'react-native-navigation';
import { ROUTE_APP_ROOT } from './navigation/routes';
import { disableYellowBox } from './helpers/yellowbox';

export class AppRoot {
  constructor() {
    // disable yellow box warnings 
    disableYellowBox();

    // Register defined routes
    initRoutes();

    // App launch with configurations defined
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: ROUTE_APP_ROOT
          }
        }
      });
    });
  }
}