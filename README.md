# 版本说明
reactnative 0.82、node 22.18.0
# 卸载全局的react-native-cli @react-native-community/cli
预防后面使用
```js
npx @react-native-community/cli init AwesomeProject --version 0.82
``` 
命令创建项目时，出现意外情况
```js
npm uninstall -g react-native-cli @react-native-community/cli
```
# 开发环境搭建
官方链接：https://www.react-native.cn/docs/environment-setup
## 关于window Android环境搭建依赖说明
根据reactnative官网指定版本的说明，确定Android studio需要安装相关依赖的版本，我当前使用的reactnative版本是0.82，需要的依赖版本是：Android 15(VanillaIceCream)、Android 15 (VanillaIceCream)、Android SDK Platform 35、Intel x86 Atom_64 System Image、Android SDK Build-Tools（35.0.0）
### Android 15(VanillaIceCream)、Intel x86 Atom_64 System Image、Android SDK Platform 35
![Alt text](%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17638846959547.png)
### 官方说0.82是要Android SDK Platform 35版本，但是模板的build.gradle配置的是需要36
![Alt text](image.png)
![Alt text](%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17638849023413.png)
### Android SDK Build-Tools，具体版本根据android的build.gradle配置确定
![Alt text](%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17638850958203.png)
![Alt text](image-1.png)
### NDK的版本也根据android的build.gradle配置确定
![Alt text](%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17638851678728.png)
![Alt text](%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17638852208176.png)
### CMake
CMake也勾选上
![Alt text](%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17638852541373.png)
### 其他的环境变量配置，很简单，就按照官方文档上的操作配置即可，我这里就不多说了

# 使用官方脚手架初始化reactnative项目
npx 会临时安装@react-native-community/cli，用完会自动进行删除
```js
npx @react-native-community/cli init AwesomeProject --version 0.82
```
# 项目开发前先要知道的几个核心点
## 项目目录的划分
### 由于之前初始化的模板，目录划分不是很全，这里我们自己在根目录新建src目录（包括assets、components、config、models、navigator、pages、utils、index.tsx）
![Alt text](image-14.png)
### 再把之前的App.tsx删除了，统一改为使用src/index.tsx
![Alt text](image-15.png)
### 启动测试
![Alt text](image-16.png)
## 绝对路径的配置
### 安装依赖
```
yarn add babel-plugin-module-resolver
```
### 配置babel.config.js
```
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/assets': './src/assets',
          '@/config': './src/config',
          '@/models': './src/models',
          '@/pages': './src/pages',
          '@/navigator': './src/navigator',
          '@/components': './src/components',
        },
      },
    ],
  ],
};
```
### 创建测试文件
在src/utils创建测试文件
![Alt text](image-17.png)
### 导入测试
![Alt text](image-18.png)
因为我们没有改动原生的代码，所以直接重新启动web服务查看效果即可
```js
# 切记，要加--reset-cache选项，重置缓存，否则会报错
yarn start --reset-cache
```
### 效果
![Alt text](image-19.png)
### 解决import语句，编辑器冒红色下划线提示问题
![Alt text](image-20.png)
配置tsconfig.json
```
{
  "extends": "@react-native/typescript-config",
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["**/node_modules", "**/Pods"],
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/assets/*": ["assets/*"],
      "@/components/*": ["components/*"],
      "@/config/*": ["config/*"],
      "@/models/*": ["models/*"],
      "@/navigator/*": ["navigator/*"],
      "@/pages/*": ["pages/*"],
      "@/utils/*": ["utils/*"]
    }
  }
}
```
![Alt text](image-21.png)
## 多环境配置
```
yarn add react-native-config
```
### 链接react-native-config
![Alt text](image-7.png)
### 安卓需额外配置
![Alt text](image-9.png)
在android/app/build.gradle的最后一行加上
```
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```
![Alt text](image-10.png)
### 在项目根目录创建.env文件
![Alt text](image-11.png)
内容如下：
```
API_URL=https://www.baidu.com
```
### 重新执行打包安装
改动了build.gradle，需要重新执行yarn android进行打包安装
可以看到，在执yarn android时，已经默认读取了环境变量配置
![Alt text](image-8.png)
### 测试是否生效
![Alt text](image-12.png)
![Alt text](image-13.png)
## 网络请求
```
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
```
验证请求效果
![Alt text](image-23.png)

## 堆栈导航器

## 标签导航器

## 状态管理
## 基本内置组件（只挑个别进行讲）
### StatusBar
>控制应用状态栏的组件（无非就显示或隐藏状态栏、设置主题色、显示或隐藏时是否启用动画这三个设置）

>后一个组件会覆盖前一个组件

>不同的平台，配置默认值可能不同、有些配置也是针对IOS或Android特有的,这里，就不多说了，用时参考官方链接即可：https://www.react-native.cn/docs/statusbar
```
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
        <View style={{height:20,backgroundColor:'yellow'}}></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```

## React Native 异形屏适配方案
```
yarn add react-native-safe-area-context
```
### 示例代码
```
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
 
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* 组件 */}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
```
SafeAreaView组件使不使用都可以，如果使用SafeAreaView组件的话,就不用自己处理状态栏高度的问题，直接把业务内容放到SafeAreaView组件内即可
### useSafeAreaInsets
仅针对被SafeAreaProvider组件包裹的业务组件，否则，调用该hook会报错
#### 使用Hooks获取Safe Area Insets
您可以通过useSafeAreaInsets() hook来访问周边的安全区域值
```
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 
const insets = useSafeAreaInsets();
return (
    <View style={{ paddingBottom: Math.max(insets.bottom, 16) }} />
);
```
#### 在类组件进行使用
对于基于类的组件，可以利用 SafeAreaInsetsContext.Consumer:
```
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
 
class ClassComponent extends React.Component {
    render() {
        return (
            <SafeAreaInsetsContext.Consumer>
                {(insets) => <View style={{ paddingTop: insets.top }} />}
            </SafeAreaInsetsContext.Consumer>
        );
    }
}
```
或者使用高阶组件 (withSafeAreaInsets) 来简化组件属性:
```
import { withSafeAreaInsets } from 'react-native-safe-area-context';
 
// 类组件示例
class ClassComponent extends React.Component {
    render() {
        return <View style={{ paddingTop: this.props.insets.top }} />;
    }
}
 
// 添加SafeAreaInsets作为props
const ClassComponentWithInsets = withSafeAreaInsets(ClassComponent);
 
// 使用增强后的组件
<ClassComponentWithInsets someProp={1} />
```
# 开发过程中的注意事项
## 1.在项目中安装完新的依赖，android会自动进行链接，如果是ios端，需要手动进入ios目录命令行执行pod install进行链接
![Alt text](%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17638855041412.png)
```
pod install
```
## 2.如果安装完新依赖，在模拟器中报错、显示异常，则可以尝试以下操作
### 方法1：停掉web服务，重新执行yarn start，再次重新在模拟器reload
### 方法2：重新执行yarn android或yarn ios在模拟器，进行重新安装app
如果还不行，则大概率是代码写得有问题，自行排查
## 3.Android studio 下载依赖太慢，可以配置Http proxy
![Alt text](image-3.png)
![Alt text](image-2.png)
## 4.模拟器无法上网问题
参考博文：https://blog.51cto.com/u_16099252/14320445
![Alt text](image-4.png)
如果上不了网，尝试跟换DNS，114.114.114.114、8.8.8.8、8.8.4.4都试试看
## 5.Android studio在下载依赖时，报错Not in GZIP format.
### 问题原因：安卓系统镜像未下载完毕就关闭/结束创建虚拟机，导致本地存在不完整的镜像 zip 包，删除重新下载即可。
报错内容如下：
![Alt text](image-5.png)
### 解决方案
Everything下载链接：https://www.voidtools.com/zh-cn/downloads/
推荐使用 Everything 搜索（不要直接在电脑的文件管理器搜索，很卡） Downloading https://dl.google.com/android/repository/sys-img/google_apis/x86_64-34_r14.zip 路径中的 zip 文件名 x86_64-34_r14.zip 后，删除（你搜索到的文件名可能类似 x86_64-34_r14.zip.asdownload）
![Alt text](image-6.png)
删除完对应文件，重新安装依赖即可
## 6.Android studio提示Android Gradle plugin requires Java 11 to run. You are currently using Java 1.8
### 原因：项目环境是需要java11，但是电脑系统环境变量配置的是java1.8版本（Android studio默认读取的是系统自身的jdk）
### 解决方法：直接重新在电脑配置对应版本的jdk版本环境变量即可
## 7.执行yarn android提升 Filename longer than 260 characters
项目文件目录层级或文件名称太长了，改短即可
![img.png](img.png)
## 8.在APP根函数组件，不能使用memo包裹导出，会报错