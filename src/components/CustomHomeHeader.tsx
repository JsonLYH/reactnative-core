import { memo } from 'react'
import { Text, StatusBar, View,StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

/**
 * 需要自己计算状态栏安全距离
 */
export default memo((props: NativeStackHeaderProps) => {
  let inset = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: inset.top, ...styles.headerContainer }}>
      {/* translucent */}
      <StatusBar translucent backgroundColor={'transparent'} />
      <Text>
        {props.options.title}-我是自定义头部-{inset.top}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    backgroundColor: 'red'
  }
})