import { memo,useState } from 'react'
import { View,Text,Button } from 'react-native'
export default memo((props) => { 
    const [list, setList] = useState([]); 
    const getData = async () => { 
        console.log("开始请求");
        fetch('https://api-v2.xdclass.net/api/teacher/v1/list').then(res => { 
            return res.json();
        }).then(res => { 
            console.log("请求数据", res)
            setList(res.data)
        })
    }
    return (
        <View style={{ alignItems:'center',width:'100%' }}>
            <Text>网络请求示例</Text>
            <Button title='开始请求数据' onPress={getData}></Button>
            <Text>{ JSON.stringify(list) }</Text>
        </View>
    )
})