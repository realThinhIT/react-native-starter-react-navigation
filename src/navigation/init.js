import { Navigation } from 'react-native-navigation';
import routes from './routes';
import { sceneCreator } from './scene';
import store from '../redux/store';
import { connect, Provider } from 'react-redux';

export const initRoutes = () => {
  for (let route of routes) {
    Navigation.registerComponent(
      route.name, 
      sceneCreator(route.container, store),
      connect,
      Provider
    );
  }
}