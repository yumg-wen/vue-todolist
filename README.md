# todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

全局事件總線(GlobalEventBus)
1.一種組件間通信的方式，適用於任何組件間通信
2.安裝全局事件總線

new Vue({
  ...
  beforeCreate(){
    Vue.prototype.$bus=this //安裝全局事件總線(任意組件通信用) $bus就是當前應用的vm
  }
 
}).$mount('#app')

3.使用事件總線

  (1)接收數據:A組件想接收數據，則在A組件中給$bus綁定自訂義事件，事件的回掉留在A組件自身
  
  methods(){
    demo(date){...}
  }
  mounted(){
     this.$bus.$on('xxx',this.demo)
  }

  (2)提供數據:this.$bus.$emit('xxx',數據)

4.最好在beforeDestory鉤子中，用$off去解綁當前組件所用到的事件 


nextTick
1.語法: this.$nextTick(回調函數)
2.作用:在 下一次 DOM更新結束後執行其指定的函數
3.何時使用?當改變數據後，要基於更新DOM進行某些操作時，要在nextTick所指定的回調中執行