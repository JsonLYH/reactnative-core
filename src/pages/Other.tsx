import { memo } from 'react'
import { View, Text,Button } from 'react-native'
import { RootStackParamList } from '@/navigator/index'
import { RouteProp } from '@react-navigation/native'
import {
  type RootStackNavigation,
} from '@/navigator/index';
interface IProps {
  route: RouteProp<RootStackParamList, 'Other'>;
  navigation: RootStackNavigation;
}
export default memo((props: IProps) => { 
    return (
      <View>
        <Text>Other页面</Text>
      </View>
    );
})