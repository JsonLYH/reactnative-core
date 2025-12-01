import { View, Text, Button } from 'react-native'
import { memo } from 'react'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import { incremented,decremented } from '@/store/reducer/counter'

export default memo(() => { 
    const dispatch = useDispatch();
    const counter:any = useSelector((state:any) => state.counter, shallowEqual);
    return (
      <View>
        <Button title="加" onPress={() => dispatch(incremented())}></Button>
        <Text>redux案例：{counter.value}</Text>
        <Button title="减" onPress={() => dispatch(decremented())}></Button>
      </View>
    );
})