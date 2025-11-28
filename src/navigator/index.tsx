import { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet } from 'react-native';
import CustomHomeHeader from '@/components/CustomHomeHeader';
import CustomHomeHeaderByNative from '@/components/CustomHomeHeaderByNative'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

let Stack = createNativeStackNavigator<RootStackParamList>();

export default memo(props => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Georgia',
            fontSize: 20,
          },
          contentStyle: {
            marginTop: 0
          },
          headerTitleAlign: 'left',
          animation: 'slide_from_right',
          headerStyle: {
            ...Platform.select({
              android: {
                backgroundColor: '#ffffff',
              },
            }),
          },
        }}
      >
        <Stack.Screen
          options={{
            title: '首页',
            header: props => {
              return <CustomHomeHeader {...props}></CustomHomeHeader>;
            }
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: '详情页',
            header: props => (
              <CustomHomeHeaderByNative {...props}></CustomHomeHeaderByNative>
            ),
          }}
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
