import { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StyleSheet } from 'react-native';
import CustomHomeHeader from '@/components/CustomHomeHeader';
import CustomHomeHeaderByNative from '@/components/CustomHomeHeaderByNative'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import ButtomsTabs, { BottomTabParamList } from '@/navigator/ButtomsTabs';
import Detail from '@/pages/Detail';
import Other from '@/pages/Other'

export type RootStackParamList = {
  ButtomsTabs: {
    title?: string;
    screen?: keyof BottomTabParamList;
  };
  Detail: {
    id: number;
  };
  Other: undefined;
};

export type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

export type RootTabStackNavigation = NativeStackNavigationProp<BottomTabParamList>;

let Stack = createNativeStackNavigator<RootStackParamList>();

export default memo(props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationDuration: 200,
          headerTitleStyle: {
            fontFamily: 'Georgia',
            fontSize: 20,
          },
          contentStyle: {
            marginTop: 0,
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
          initialParams={{
            title: '首页',
          }}
          name="ButtomsTabs"
          options={{
            title: '首页',
            header: props => {
              return <CustomHomeHeader {...props}></CustomHomeHeader>;
            },
          }}
          key="ButtomsTabs"
          component={ButtomsTabs}
        />
        <Stack.Screen
          initialParams={{
            id: 66,
          }}
          options={{
            title: '详情页',
            header: props => (
              <CustomHomeHeaderByNative {...props}></CustomHomeHeaderByNative>
            ),
          }}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{
            title: '其他页',
            header: props => (
              <CustomHomeHeaderByNative {...props}></CustomHomeHeaderByNative>
            ),
          }}
          component={Other}
          name="Other"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
});
