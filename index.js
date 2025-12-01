/**
 * @format
 */
import { AppRegistry } from 'react-native';
import Index from './src/index';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store/index';

function App() {
    return (
        <Provider store={store}>
            <Index></Index>
        </Provider>
    )
 }

AppRegistry.registerComponent(appName, () => App);
