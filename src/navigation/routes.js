import { createRoute } from '../helpers/routes';
import AppContainer from '../containers/AppContainer/AppContainer';

export const ROUTE_APP_ROOT = 'root.App';

export default [
  createRoute(ROUTE_APP_ROOT, AppContainer)
];