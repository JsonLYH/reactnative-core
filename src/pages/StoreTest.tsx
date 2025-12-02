import { View, Text, Button,FlatList } from 'react-native'
import { memo } from 'react'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import { incremented, decremented } from '@/store/reducer/counter'
import { getTestDataAction } from '@/store/asyncActions/counterAsyncAction'

export default memo(() => { 
    const dispatch = useDispatch();
    const counter:any = useSelector((state:any) => state.counter, shallowEqual);
    return (
      <View>
        <Button title="加" onPress={() => dispatch(incremented())}></Button>
        <Text>redux案例：{counter.value}</Text>
        <Button title="减" onPress={() => dispatch(decremented())}></Button>
        <View style={{ marginTop: 10 }}>
          <Button
            title="异步请求"
            onPress={() => dispatch(getTestDataAction() as any)}
          ></Button>
        </View>
        <FlatList data={counter.list} renderItem={(data) => { 
          return (
            <View>
              <Text>{ data.item.name }</Text>
            </View>
          )
        }}></FlatList>
      </View>
    );
})