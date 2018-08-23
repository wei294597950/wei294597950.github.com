---
layout:     post
title:      "react-native全过程初探"
subtitle:   "填坑记"
date:       2018-08-23
author:     ""
header-img: "img/20180823header.jpg"
---

# react-native全过程初探

---
**环境搭建**

```
react-native init projectname
cd projectname
npm  i
react-native run-android
```
> **错误处理**
- > unable to reslove modele 'AccessibilityInfo'
>主要原因可能是react-native和react-native-cli的版本问题，可行解决方案是

```
npm uninstall -g react-native-cli
npm install react-native@0.55.4
npm install -g react-native-cli@1.2.0
react-native init --version="0.55.4" myprojectnane
```
- >app:mergeDebugResources FAILED
> 此问题会出现在重新run-android后,由于android目录的无法重新合并编译导致，解决如下

```
cd android
./gradlew clean
或者
重复执行react-native run-android两到三次
```

---
**框架及知识点**
-  UI框架：网上主要使用的是react-native elementUI和native-base
- 状态管理器：redux包括connect,mapstatetoprops,mapactiontoprops(将state和action绑定到组件上)、react-thunk和react-saga(用于异步action)
- 导航组件：react-navigation 、react-native-side-menu
- 图标组件：react-native-vector-icons
```
react-navigation使用其中的抽屉导航DrawerNavigation可能会遇到问题：
'drawerOpen'等打开或关闭抽屉的接口在新版中已移除,更改为
this.props.navigation.openDrawer()
this.props.navigation.closeDrawer()
this.props.navigation.toggleDrawer()

```




