import { memo,useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { type RootStackNavigation, type RootTabStackNavigation, type RootStackParamList } from '@/navigator/index';
import { RouteProp } from '@react-navigation/native';
import Config from 'react-native-config'
import Icon from '@/assets/iconfont/index'
import { Dimensions,ToastAndroid,BackHandler } from 'react-native'
interface IProps {
    navigation: RootTabStackNavigation & RootStackNavigation;
}

export default memo((props: IProps) => {
  let {width:viewPortWidth,height:viewPortHeight} = Dimensions.get('window')
  let { navigation } = props;
  let backHandlerPressedCount = 0;
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigation.isFocused()) {
          if (backHandlerPressedCount < 1) {
            backHandlerPressedCount++;
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            setTimeout(() => {
              backHandlerPressedCount = 0;
            }, 2000);
            return true;
          } else {
            backHandlerPressedCount = 0;
            BackHandler.exitApp();
            return false;
          }
        }
      },
    );
    return () => backHandler.remove();
  }, []);
  console.log('切换到Home才会渲染了，且只会渲染一次');
  const goToDetail = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };
    const goToTab = () => {
        navigation.navigate('Found');
  };
  const goToRedux = () => { 
    navigation.navigate('StoreTest');
  }
  return (
    <View>
      <Text>Home页面</Text>
      <View>
        <Text>视口宽度:{viewPortWidth}</Text>
        <Text>视口高度:{viewPortHeight}</Text>
      </View>
      <Button title="跳转到详情页(传递id=100)" onPress={goToDetail}></Button>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Button title="跳转到指定的Tab页" onPress={goToTab}></Button>
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Button title="跳转redux案例页" onPress={goToRedux}></Button>
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text>多环境配置：{Config.API_URL}</Text>
      </View>
      <View>
        <Text>阿里icon图标展示</Text>
        <Icon name="icon-dianzan" size={50} color="red"></Icon>
        <Icon name="icon-dianzan1" size={50} color="red"></Icon>
        <Icon name="icon-guolv" size={50} color="red"></Icon>
      </View>
    </View>
  );
});
