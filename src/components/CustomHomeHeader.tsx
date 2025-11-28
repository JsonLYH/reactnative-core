import { memo } from 'react'
import { Text, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default memo((props) => { 
    let inset = useSafeAreaInsets();
    return (
      <View style={{ paddingTop: inset.top }}>
        {/* translucent */}
        <StatusBar translucent backgroundColor={'transparent'} />
        <Text>我是自定义头部{inset.top}</Text>
      </View>
    );
})