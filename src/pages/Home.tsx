import { memo } from 'react'
import { View, Text,Button } from 'react-native'
import { RootStackNavigation } from '@/navigator/index'

interface IProps { 
    navigation : RootStackNavigation
}

export default memo((props: IProps) => { 
    let { navigation } = props;
    const goToDetail = () => { 
        navigation.navigate('Detail', {
            id: 100
        });
    }
    return (
        <View>
            <Text>Home页面</Text>
            <Button title='跳转到详情页(传递id=100)' onPress={goToDetail}></Button>
        </View>
    )
})