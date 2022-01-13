<template>

      <div class="todo-header">
        <input type="text" placeholder="請輸入任務名稱，按 ENTER 新增任務" @keyup.enter="add"  v-model="title">
      </div>
   
  
</template>

<script>

import {nanoid} from 'nanoid'

export default {
  name: 'MyHeader',
  data(){
    return{
      title:''
    }
  },
 
  methods:{
   add(){
     if(!this.title.trim()) return alert('請輸入任務')
     const todoObj={id:nanoid(),title:this.title,done:false,}
     this.$emit('addTodo',todoObj)
     this.title=''
    //  console.log(todoObj);

     }
 }
}
</script>


<style scoped lang="less" scoped>
.todo-header input{
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius:4px ;
  padding: 4px 7px;
  &:focus{
    outline: none;
    border-color: rgba(82,168,236,.8);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(82,168,236,.6);
  }
}

</style>
