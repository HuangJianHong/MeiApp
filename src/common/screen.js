/**
 * Created by Administrator on 2017/7/28.
 */
import {Platform, PixelRatio} from 'react-native';
import  {Dimensions} from 'react-native'

export default {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    onePixel: 1/PixelRatio.get(),
    statusBarHeight:(Platform.OS === 'ios'? 20: 0)
}


