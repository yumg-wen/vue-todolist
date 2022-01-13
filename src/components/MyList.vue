<template>
  <ul class="todo-main">
   <my-item 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo='todoObj' 
   
    >
  </my-item>
     
  </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  name: 'MyList',
  components:{
   MyItem
 },
 props:['todos']
}
</script>


<style scoped lang="less" scoped>
.todo-main{
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius:2px ;
  padding: 0;
}
.todo-empty{
  height: 40px;
  line-height: 40;
  border:1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>
