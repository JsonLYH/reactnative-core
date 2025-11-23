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

## 绝对路径的配置

## 多环境配置

## 网络请求

## 堆栈导航器

## 标签导航器

## 状态管理

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
项目文件目录层级太长了，改短即可
![img.png](img.png)