//@ts-nocheck
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {initStore} from './src/store';
import Screens from './src/Navigation/index';
import AulTheme from './src/Constants/Theme'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
    const store = initStore();
    return (
        <NavigationContainer>
            <PaperProvider theme={AulTheme}>
                <Provider store={store}>
                        <Screens/>
                </Provider>
            </PaperProvider>
        </NavigationContainer>
    )
        ;
};
export default App;
