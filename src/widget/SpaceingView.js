/**
 * Created by Administrator on 2017/7/28.
 * @flow
 */
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import color from './color'


export  default class SpaceingView extends PureComponent{
    render(){
        return(
            <View style={styles.container}>
            </View>
        )
    }
}

 const styles = StyleSheet.create({
     container:{
         height:14,
         backgroundColor: color.background
}
 });