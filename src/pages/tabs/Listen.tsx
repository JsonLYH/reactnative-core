import { View, Text } from 'react-native';
import { memo } from 'react';

export default memo(() => {
  console.log('切换到Listen才会渲染了，且只会渲染一次');
  return (
    <View>
      <Text>Listen</Text>
    </View>
  );
});
