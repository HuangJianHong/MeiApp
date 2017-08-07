/**
 * Created by Administrator on 2017/8/7.
 */
import React, {PureComponent} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {Heading2} from '../../widget/Text';
import screen from '../../common/screen'

class  HomeMenuItem extends PureComponent{
    render(){
         return(
             <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                 <Image source={this.props.icon}  style={styles.icon} resizeMode={Image.resizeMode.contain}/>

                <Heading2>
                    {this.props.title}
                </Heading2>
             </TouchableOpacity>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 5,
        height: screen.width / 5,
    },
    icon: {
        width: screen.width / 9,
        height: screen.width / 9,
        margin: 5,
    }
});

//make this component available to the app
export default HomeMenuItem;