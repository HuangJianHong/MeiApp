/**
 * Created by Administrator on 2017/7/28.
 * 分割线
 * @flow
 */
import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";

import color from "./color";
import screen from "../common/screen";      //Warning TODO


export default class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style]}/>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: color.background,
    }
});