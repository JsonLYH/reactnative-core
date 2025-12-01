import { memo } from 'react';
import { View, Text, Button } from 'react-native';
import { type RootStackNavigation, type RootTabStackNavigation, type RootStackParamList } from '@/navigator/index';
import { RouteProp } from '@react-navigation/native';

interface IProps {
    navigation: RootTabStackNavigation & RootStackNavigation;
}

export default memo((props: IProps) => {
  let { navigation } = props;
  console.log('切换到Home才会渲染了，且只会渲染一次');
  const goToDetail = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };
    const goToTab = () => {
        navigation.navigate('Found');
    };
  return (
    <View>
      <Text>Home页面</Text>
      <Button title="跳转到详情页(传递id=100)" onPress={goToDetail}></Button>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Button title="跳转到指定的Tab页" onPress={goToTab}></Button>
      </View>
    </View>
  );
});
