import { memo } from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '@/navigator/index'
import { RouteProp } from '@react-navigation/native'
interface IProps { 
    route : RouteProp<RootStackParamList,"Detail">
}
export default memo((props: IProps) => { 
    const { route } = props;
    return (
        <View>
            <Text>Detail页面</Text>
            <Text>{ route.params.id }</Text>
        </View>
    )
})