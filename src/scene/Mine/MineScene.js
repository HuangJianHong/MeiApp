/**
 * Created by Administrator on 2017/7/28.
 * @flow
 */
import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, RefreshControl, TouchableOpacity} from 'react-native';

import {Heading1, Heading2, Paragraph} from '../../widget/Text';
import screen from '../../common/screen';
import color from '../../widget/color';
import SpacingView from '../../widget/SpacingView';
import DetailCell from '../../widget/DetailCell';

export default class MineScene extends PureComponent {

    //配置本地数据
    getDataList() {
        return (
            [
                [
                    {title: '我的钱包', subtitle: '办信用卡', image: require('../../img/Mine/icon_mine_wallet@2x.png')},
                    {title: '余额', subtitle: '￥95872385', image: require('../../img/Mine/icon_mine_balance@2x.png')},
                    {title: '抵用券', subtitle: '63', image: require('../../img/Mine/icon_mine_voucher@2x.png')},
                    {title: '会员卡', subtitle: '2', image: require('../../img/Mine/icon_mine_membercard@2x.png')}
                ],
                [
                    {title: '好友去哪', image: require('../../img/Mine/icon_mine_friends@2x.png')},
                    {title: '我的评价', image: require('../../img/Mine/icon_mine_comment@2x.png')},
                    {title: '我的收藏', image: require('../../img/Mine/icon_mine_collection@2x.png')},
                    {title: '会员中心', subtitle: 'v15', image: require('../../img/Mine/icon_mine_membercenter@2x.png')},
                    {title: '积分商城', subtitle: '好礼已上线', image: require('../../img/Mine/icon_mine_member@2x.png')}
                ],

                [
                    {title: '客服中心', image: require('../../img/Mine/icon_mine_customerService@2x.png')},
                    {title: '关于美团', subtitle: '我要合作', image: require('../../img/Mine/icon_mine_aboutmeituan@2x.png')}
                ]
            ]
        )
    }

    //初始化 State
    state:{
        isRefreshing:boolean
    };

    constructor(props){
        super(props);
        this.state={
            isRefreshing: false
        }
    }

    onHeaderRefresh(){
        this.setState({isRefreshing:false});

        setTimeout(()=> {
            this.setState({isRefreshing:true});
        }, 1000)
    }


    render(){
        return(
          <View style={{flex:1, backgroundColor:color.background}}>
            <View style={{position:'absolute', width:screen.width, height:screen.height /2 , backgroundColor:color.theme}}/>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={()=> this.onHeaderRefresh()}
                        tintColor='gray'
                    />
                }>
                {this.renderHeader()}
                <SpacingView />
                {this.renderCells()}
            </ScrollView>
          </View>
        );
    }

    renderHeader(){
        return(
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <Image  style={styles.avatar} source={require('../../img/Mine/avatar.png')}/>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Heading1 style={{color:'white'}}>Huang</Heading1>
                            <Image style={{marginLeft:4}} source={require('../../img/Mine/beauty_technician_v15@2x.png')}/>
                        </View>
                        <Paragraph style={{color:'white', marginTop:4}}>个人信息</Paragraph>
                    </View>
                </View>
            </View>
        )
    }

    renderCells(){
        let cells =[];
        let dataList = this.getDataList();
        for (let i=0; dataList.length; i++){
            let subList= dataList[i];
            for(let j=0; subList.length; j++){
                let data = subList[i];
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title}/>
                cells.push(cell)
            }
            cells.push(<SpacingView key={i}/>)
        }

        return(
          <View style={{flex:1}}>
              {cells}
          </View>
        );
    }


}

// define your styles
const styles = StyleSheet.create({
    header: {
        backgroundColor: color.theme,
        paddingBottom: 20
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});
















































