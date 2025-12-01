import { Header } from '@react-navigation/elements';
import { RouteProp } from '@react-navigation/native'
import { Button } from 'react-native'
import { memo } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

/**
 * 自动计算状态栏安全距离
 */
export default memo((props: NativeStackHeaderProps) => {
  let { route, options, navigation } = props;
  return (
    <Header
      title={options.title || ''}
      headerStyle={options.headerStyle}
      headerTintColor={options.headerTintColor}
      headerLeft={() => (
        <Button title="返回" onPress={() => navigation.goBack()} />
      )}
    />
  );
});
