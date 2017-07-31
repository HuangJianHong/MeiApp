
/**
 * Created by Administrator on 2017/7/31.
 */

import React,{PureComponent} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import {Heading2} from '../../widget/Text';
import screen from '../../common';

class OrderMenuItem extends PureComponent{
      render(){
          return(
           <TouchableOpacity style={styles.container}>
               <Image source={this.props.icon} resizeMethod='contain' style={styles.icon}/>
              <Heading2>
                  {this.props.title}
              </Heading2>
           </TouchableOpacity>
          )
      }
}

 const styles= StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:screen.width/4,
        height:screen.height/5,
    },
    icon:{
        width:30,
        height:30,
        margin:5,
    },
 });


//make this component available to the app
export  default OrderMenuItem;

