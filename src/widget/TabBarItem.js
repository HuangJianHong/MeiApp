import React, {PureComponent} from "react";
import {Image} from "react-native";

/**
 * Created by Administrator on 2017/8/3.
 */

class TabBarItem extends PureComponent {
    render() {
        let selectedImage = this.props.selectImage ? this.props.selectedImage : this.props.normalImage;
        return (
            <Image
                source={ this.props.focused ? selectedImage : this.props.normalImage}
                style={{tintColor: this.props.tintColor, width: 25, height: 25}}
            />
        )
    }

}

//make this component available to the app;
export  default  TabBarItem;