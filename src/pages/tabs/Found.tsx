import { View, Text,Button } from 'react-native';
import { memo } from 'react';
import { RootStackNavigation } from '@/navigator/index'
interface IProps {
  navigation: RootStackNavigation;
}
export default memo((props: IProps) => {
  let { navigation } = props;
  const goToDetail = () => {
    navigation.navigate('Detail', {
      id: 100,
    });
  };
  console.log('切换到Found才会渲染了，且只会渲染一次');
  return (
    <View>
      <Text>Found</Text>
      <Button title="跳转到详情页(传递id=100)" onPress={goToDetail}></Button>
    </View>
  );
});
