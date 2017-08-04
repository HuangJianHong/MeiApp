/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Text, View} from 'react-native';
// import RootScene from './src/RootScene';
import MineScene from './src/scene/Mine/MineScene';
import OrderScene from './src/scene/Order/OrderScene';


export default class MeiApp extends Component {
    render() {
        return (
            <OrderScene/>
        )
    }
}

AppRegistry.registerComponent('MeiApp', () => MeiApp);
