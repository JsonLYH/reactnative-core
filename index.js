/**
 * @format
 */
import { AppRegistry } from 'react-native';
import Index from './src/index';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store/index';

//生产环境置空console
if (!__DEV__) { 
    let cos = ['info', 'log', 'warn', 'error'];
    const emptyFunc = () => { };
    cos.forEach(item => { 
        global.console[item] = emptyFunc;
    })
}

function App() {
    return (
        <Provider store={store}>
            <Index></Index>
        </Provider>
    )
 }

AppRegistry.registerComponent(appName, () => App);
