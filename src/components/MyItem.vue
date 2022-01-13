<template>
  <li>
      <label >
        <input type="checkbox" :checked="todo.done" @change='handleCheck(todo.id)'>
        <span v-show="!todo.isEdit" >{{todo.title}}</span>
        <input  
          type="text" 
          v-show="todo.isEdit" 
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle">
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)" >刪除</button>
      <button class="btn btn-edit" @click="handleEdit(todo)"  v-show="!todo.isEdit">編輯</button>
    </li>
  
</template>

<script>
export default {
  name: 'MyItem',
  //聲明接收todo對象
  props: ['todo'],
  methods:{
    handleCheck(id){
      //通知app組件對應的todo對象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    //刪除
    handleDelete(id){
      if(confirm('確定要刪除嗎?')){
     //通知app組件對應的todo對象刪除
     this.$bus.$emit('deleteTodo',id)
   
      }
    },
    //編輯
    handleEdit(todo){

      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit=true
      }
      else{
        console.log('todo身上沒有isEdit');
        this.$set(todo,'isEdit',true)
      }
      // setTimeout(()=>{
      //    this.$refs.inputTitle.focus()
      // },200)
      this.$nextTick(function(){
         this.$refs.inputTitle.focus()
      })
    },
    //失去焦點回調(真正執行修改邏輯)
    handleBlur(todo,e){
      todo.isEdit=false
      // console.log(todo.id,e.target.value);
      if(!e.target.value.trim()) return alert('任務不能為空')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
 
  }
}
</script>


<style scoped lang="less" scoped>
li{
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  &:hover{
    background-color: #ccc;
    button{
      display: block;
    }
  }
  label{
    float: left;
    cursor: pointer;
    input{
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }
    
     
    &::before{
      content: initial;
    }
    &:last-child{
      border-bottom: none;
    
    }
    
  }
  button{
      float: right;
      display: none;
      margin-top: 3px;
     
    }
}

</style>
