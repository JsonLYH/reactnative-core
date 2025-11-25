/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RequestDemo from '@/components/requestDemo'
import Config from 'react-native-config';
import { test } from '@/utils/index';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
    test();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />
      <SafeAreaView>
        <View style={{ backgroundColor:'red' } }>
          <Text>{ Config.API_URL }</Text>
        </View>
        <View style={{ height: 20, backgroundColor: 'yellow' }}></View>
        <RequestDemo></RequestDemo>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
