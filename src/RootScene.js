/**
 * Created by Administrator on 2017/8/2.
 */
import React,{PureComponent} from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';


import TabBarItem from './widget/TabBarItem';
import color from './widget/color';

import MineScene from './scene/Mine/MineScene';
import OrderScene from './scene/Order/OrderScene';



function getCurrentRouteName(navigationState){
    if(!navigationState){
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    
    //dive into nested navigators
    if (route.routes){
        return getCurrentRouteName(route);
    }
    return route.routeName;
}



class RootScene extends PureComponent{
     constructor(){
         super();

         StatusBar.setBarStyle('light-content')
     }

     render(){
         return(
             <Navigator></Navigator>
         )
     }
}

const Tab = TabNavigator(
    {
        Order:{
            screen: OrderScene,
            navigationOptions: ({navigation}) => ({
               tabBarLabel: '订单',
                tabBarIcon: ({focused, tintColor}) =>(
                    <TabBarItem
                        tintColor={tintColor}
                        focused ={focused}
                         normalImage = {require('./img/tabbar/pfb_tabbar_order@2x.png')}
                         selectedImage = {require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}
                    />
                )
            }),
        },

        Mine:{
            screen: MineScene,
            navigationOptions: ({navigation}) => ({
               tabBarIcon: ({focused, tintColor}) => (
                   <TabBarItem
                       tintColor={tintColor}
                       focused = {focused}
                       normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                       selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                   />
               )

            }),

        }
    },
    
    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy:true,
        tabBarOptions:{
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style:{backgroundColor:'#ffffff'}
        }
    }
);




const  Navigator = StackNavigator(
    {
        Tab:{screen: Tab},
        // Web:{screen: WebScene},
        // GroupPurchase:{screen: GroupPurchaseSceen}
    }  ,
    {
        navigationOptions:{
            headerBackTitle:null,
            headerTintColor: '#333333',
            showIcon:true,
        }

    }
);

//make this component available to the app;
export default RootScene;


