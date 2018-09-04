---
layout:     post
title:      "级联选择器 react 与 vue 实现"
subtitle:   "练笔"
date:       2018-09-04
author:     ""
header-img: "img/mmexport1512392828029.jpg"
---
# 三级级联选择器 react 与 vue 实现
##### vue 双向绑定实现更为方便，将select标签的v-model绑定选择的值,将option的value绑定选择的值，实现级联
##### react
## react 是通过select的onchang事件setstate修改状态，来实现级联

```
import React from 'react';
import ReactDOM from 'react-dom';

export default class CaseCade extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectP:'',
            selectC:'',
            selectCo:'',
            province:["请选择","湖北","广东"],
            city:{
                "湖北": ["请选择","wh","tm"],
                "广东": ["请选择","sz","gz"]
            },
            countryside:{
                "wh": ["1","2"],
                "tm": ["3","4"],
                "sz": ["5","6"],
                "gz": ["7","8"]
            },
        };
        this.changeP = this.changeP.bind(this);
        this.changeC = this.changeC.bind(this)
    };

    changeP(e) {
        this.setState({
            selectP: e.target.value,
            selectC: '',
            selectCo:'',
        })
    }
    changeC(e) {
        this.setState({
            selectC: e.target.value,
            selectCo:''
         });
      };

    render(){
        const provinces = this.state.province.map((item,index) => {
            return <option key={index}>{item}</option>
        })
        const citys = this.state.city.hasOwnProperty(this.state.selectP) && this.state.city[this.state.selectP].map((item,index) => {
            return <option key={index}>{item}</option>
        })

        const countrysides = this.state.countryside.hasOwnProperty(this.state.selectC) && this.state.countryside[this.state.selectC].map((item,index)=>{
            return <option key={index}>{item}</option>
        })
        return(
            <div style={{ marginTop: 50 }}>
                <select onChange={this.changeP} value={this.state.selectP}>
                    {provinces}
                </select>

                <select onChange={this.changeC} value={this.state.selectC}>
                    {citys}
                </select>

                <select value={this.state.selectCo}>
                    {countrysides}
                </select>
            </div>
        )
    }
}
```
## vue

```
<template>
<div>
    <select name="" id="" v-model="one"  >
        <option :value="op" v-for="op in selectOne" :key="op">{{ op }}</option>
    </select>
        <select name="select" id="s2"  v-model="two">
        <option :value="op" v-for=" op in selectTwo[one]" :key="op">{{ op }}</option>
    </select>
        <select name="" id="" v-model="three" >
        <option :value="op" v-for=" op in selectThree[two]" :key="op">{{ op }}</option>
    </select>
</div>
</template>

<script>
export default {
    name: 'CaseCades',
    data(){
        return{
            selectOne: [
                "湖北","广东"
            ],
            selectTwo: {
                "湖北":["wh","tm"],
                "广东" :["gz","sz"]
            }

            ,
            selectThree: {
                "wh": ["1","2"],
                "tm":  ["3","4"],
                "gz": ["5","6"],
                "sz": ["7","8"]
            }
            ,
            one: '',
            two: '',
            three: ''
        }
    },
    watch:{
        one: function(value){
            console.log(value)
            this.two = '';
            this.three = ''
        }
    }
}
</script>

<style>

</style>

```
