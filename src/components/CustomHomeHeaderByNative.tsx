import { Header } from '@react-navigation/elements';
import { Button } from 'react-native'
import { memo } from 'react';
export default memo(({ navigation, route, options }) => {
  return (
    <Header
      title={options.title}
      headerStyle={options.headerStyle}
      headerTintColor={options.headerTintColor}
      headerLeft={() => (
        <Button title="返回" onPress={() => navigation.goBack()} />
      )}
    />
  );
})
