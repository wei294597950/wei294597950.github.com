---
layout:     post
title:      "vue使用echarts"
subtitle:   "值得记录"
date:       2018-09-04
author:     ""
header-img: "img/echarts.jpg"
---
>基本使用

```
import echarts from 'echarts';
...
this.mychart = echarts.init(document.getElementById('mychart'))
...
let option = {...}
...
//true用于数据变更的合并重新绘制
this.mychart.setOption(option, true);
```
> 主题变换

```
下载主题  http://echarts.baidu.com/download-theme.html
//在main.js入口文件中引入
import '../js/essos'
import '../js/walden'
import '../js/dark'
import '../js/infographic'
import '../js/macarons'
import '../js/shine'
import '../js/vintage'

//使用主题
...
echarts.init(document.getElementById('mychart'),'vintage')

```

> 引入百度地图
参考项目 http://gallery.echartsjs.com/editor.html?c=xSyWLw7UIg

```
//下载并引入 bmap.js
https://github.com/Lee981265/echartsMap/tree/master/GitMap2/echarts3_map_demo
//在地图使用文件中引入
关键点
require('../../js/bmap')

```
>窗口适应
使echarts随窗口大小变化自适应

```
//监听浏览器窗口的resize事件触发echarts的resize事件
...
that.indexChart.setOption(that.indexdata, true);
window.addEventListener('resize',  () => {
                      this.indexChart.resize();
                  });
  	})
...
```
> echarts多图切换

######   **问题点**
1. 在使用echarts时，对应的div元素必须指定 width 和 height的其中一个，如果echarts获取不到这个数据将无法绘制，切换时出现问题。
2. 用select切换时，由于无法获取长宽，echarts的resize事件无法执行(根据div来resize)。
###### 解决方法，不够成熟，仅供参考


```
<el-select  v-model="selectedChart" placeholder="请选择" @change="changeChart" style="width:12%;margin-left:5%;">
<el-option
    v-for="item in showChartOptions"
    :key="item.value"
    :label="item.label"
    :value="item.value" >
    </el-option>
</el-select>
...
 <div class="container" :style="xpanelDiv" v-show="showChartMap.cpuUsage" id="cpuUsage">
 ...
//v-if 也是惰性的,如果在初始渲染时条件为假,那么什么都不做- - 直到条件第一次为真的时候才会开始渲染条件块,相比之下
//v-show就简单得多- - 不管初始条件是什么,元素总会被渲染,并且只是简单的基于css进行切换.
###### 问题1
这里用v-show保证div得到初始化，并且div元素中存在echarts实例属性
//使用如下方法在切换时清空实例属性，实现强制重绘
1. document.getElementById("mychart").setAttribute('_echarts_instance_', '')
//this.lastSelectedChart为切换前的实例，获取它的宽度赋值给当前元素
2. document.getElementById("mychart").style.width= document.getElementById(this.lastSelectedChart).clientWidth*0.75+'px';

在特殊情况下,我们可能是用echarts实例并且setOption()但无法刷新表格内容,例如:我们修改了div容器的内部标签等等...
原因可能是我们破坏了第一次渲染的div容器的结构,
echarts的渲染逻辑是这样的:
 如果未实例化则进行实例化过程,在此期间会在div容器生成一个 _echarts_instance_ 属性, 该属性值其实就是当前echarts的ID,然后进行后边的渲染操作...

当我们刷新已经实例化的echarts图表时,echarts会先匹配改div容器上的_echarts_instance_属性值是否与实例对象的ID一样,如果一样则会在原有的结构上进行渲染,但是因为我破坏了原有的结构,所以无法重新渲染出表格内容,所以我们可以执行如下代码:
document.getElementById('div的ID').setAttribute('_echarts_instance_', '')
这样div的_echarts_instance_值就不会被匹配到,这样echarts就会像渲染新的图标一样渲染出来
注:这样的操作会重新渲染echarts的div容器结构,也就是重新操作了dom,会影响性能
###### 问题2
window.addEventListener('resize',  () => {
document.getElementById("cpu_usage").style.width = '75%';
                      that.cpuUsageChart.resize();
});
//自行设置宽度保证切换大小
```
> 受益博客
https://segmentfault.com/a/1190000013539084

