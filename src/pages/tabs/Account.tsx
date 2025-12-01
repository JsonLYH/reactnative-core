import { View, Text } from 'react-native'
import { memo } from 'react'

export default memo(() => { 
    console.log("切换到Account才会渲染了")
    return (
        <View>
            <Text>Account</Text>
        </View>
    )
})