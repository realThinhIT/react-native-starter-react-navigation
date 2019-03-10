import AppContainer from '../containers/AppContainer/AppContainer';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { sceneCreator } from './scene';

const AppNavigator = createStackNavigator(
  {
    Home: sceneCreator(AppContainer)
  },
  {
    initialRouteName: 'Home'
  }
);

export const MainAppContainer = createAppContainer(AppNavigator);