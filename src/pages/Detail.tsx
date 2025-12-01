import { memo } from 'react'
import { View, Text,Button } from 'react-native'
import { RootStackParamList } from '@/navigator/index'
import { RouteProp } from '@react-navigation/native'
import {
  type RootStackNavigation
} from '@/navigator/index';
interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
  navigation: RootStackNavigation;
}
export default memo((props: IProps) => { 
  const { route, navigation } = props;
  const goToTab = () => {
      navigation.popTo('ButtomsTabs', {
        screen:'Found'
      });
  };
  const goToOther = () => { 
    navigation.navigate('Other');
  }
    return (
      <View>
        <Text>Detail页面</Text>
        <Text>{route.params.id}</Text>
        <Button title="跳转到指定的Tab页（账户）" onPress={goToTab}></Button>
        <Button title="跳转其他页" onPress={goToOther}></Button>
      </View>
    );
})