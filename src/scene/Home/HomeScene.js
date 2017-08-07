/**
 * Created by Administrator on 2017/8/7.
 * @flow
 */
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text';
import NavigationItem from '../../widget/NavigationItem';
import color from '../../widget/color';
import screen from '../../common/screen'

import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

class HomeScene extends  PureComponent{

    static navigationOptions = ({navigation}) => ({
        headerTitle:(
          <TouchableOpacity style={styles.searchBar}>
              <Image source={require('../../img/Home/search_icon.png')}  style={styles.searchIcon}/>
              <Paragraph >一点点</Paragraph>
          </TouchableOpacity>
        ),

        headerLeft:(
          <NavigationItem
              title='福州'
              titleStyle={{color: 'white'}}
              onPress={() => {

              }}
          />
        ),
        headerRight:(
                <NavigationItem
                    icon={require('../../img/Home/icon_navigationItem_message_white@2x.png')}
                />
        ),

        headerStyle:{backgroundColor: color.theme},
    });




    render(){
        return(
            <Heading1>Home页面</Heading1>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});




export  default HomeScene;



