/**
 * Created by Administrator on 2017/7/28.
 * 分割线
 * @flow
 */
import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";

import color from "./color";
import {screen, system} from "../common";      //Warning TODO


export default class Separator extends PureComponent {
    render() {
        return (
            <View style={[styles.line, this.props.style]}/>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        with: screen.with,
        height: screen.onePixel,
        backgroundColor: color.background,
    }
});