import Account from '@/pages/tabs/Account';
import Found from '@/pages/tabs/Found';
import Listen from '@/pages/tabs/Listen';
import Home from '@/pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo,useEffect } from 'react';
import { RootStackNavigation, RootStackParamList } from '@/navigator/index';
import { RouteProp, TabNavigationState, useNavigationState } from '@react-navigation/native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

export type BottomTabParamList = {
  Index: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};

const tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'ButtomsTabs'> & {
  // 无法正常获取state，用hooks即可
  state?: TabNavigationState<RootStackParamList>;
};

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

export default memo((props: IProps) => {
  let { route } = props;
  // 标签导航、堆栈导航跳转这里都会执行
  if (route) {
    console.log(route)
  }
  // 用hooks获取state状态
  const state = useNavigationState(state => state);
  // 如果不想自己判断标题展示，也可以使用bottom-tab自带的标题
  function getTitleName() {
    const stateObj = state.routes[0].state;
    if (stateObj) { 
      let routeNames = stateObj.routeNames || ['Index'];
      let index = stateObj.index || 0;
      let currentRouteName = routeNames[index];
      switch (currentRouteName) {
        case 'Index':
          return "首页"
        case 'Listen':
          return "我听";
        case 'Found':
          return "发现";
        case 'Account':
          return '账户';
        default:
          return '首页';
      }
    }
    return '首页';
  }
  useEffect(() => {
    // props.route.state无法获取state，用hooks即可
    // console.log('我变化了', props.route.state);
    let title = getTitleName();
    props.navigation.setOptions({
      title,
    });
  }, [state.routes[0].state]);

  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // 取消tab自带的标题，否则与堆栈导航的头部重叠
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:any;
          if (route.name === 'Index') {
            iconName = focused ? 'house-chimney' : 'house';
          } else if (route.name === 'Listen') {
            iconName = focused ? 'music' : 'music';
          } else if (route.name === 'Found') {
            iconName = focused ? 'truck-field-un' : 'truck-field-un';
          } else if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user';
          }
          return (
            <FontAwesome6
              name={iconName}
              iconStyle="solid"
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <tab.Screen
        name="Index"
        component={Home}
        options={{
          title: '首页',
        }}
      ></tab.Screen>
      <tab.Screen
        name="Listen"
        options={{
          title: '我听',
        }}
        component={Listen}
      ></tab.Screen>
      <tab.Screen
        name="Found"
        options={{
          title: '发现',
        }}
        component={Found}
      ></tab.Screen>
      <tab.Screen
        name="Account"
        options={{
          title: '账户',
        }}
        component={Account}
      ></tab.Screen>
    </tab.Navigator>
  );
});
