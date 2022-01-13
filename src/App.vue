<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
         <my-header @addTodo='addTodo'></my-header>
         <my-list :todos='todos' ></my-list>
         <my-footer :todos='todos' @checkAllTodo='checkAllTodo' @clearAllTodo='clearAllTodo'></my-footer>
      </div>
     
    </div>
   
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter,
    
  },
  data(){
   return{
     todos:JSON.parse(localStorage.getItem('todos')) || []
    
   }
 },
 methods:{
   //添加todo
  addTodo(todoObj){
     this.todos.unshift(todoObj)
     },
   //取消/勾選todo
  checkTodo(id){
    this.todos.forEach((todo)=>{
      if(todo.id===id) todo.done=!todo.done
    })
  },

  //更新一個todo
  updateTodo(id,title){
    this.todos.forEach((todo)=>{
      if(todo.id===id) todo.title=title
    })
  },
   //刪除
   deleteTodo(id){
     this.todos=this.todos.filter((todo)=>{
       return todo.id !==id
     })
   },
   //取消或全選
   checkAllTodo(done){
     this.todos.forEach((todo)=>{
       todo.done=done

     })
   },
   //清除已經完成的todo
   clearAllTodo(done){
   this.todos= this.todos.filter((todo)=>{
      return !todo.done 
    })
   }
 },
 watch:{
    todos:{
      deep: true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
      
    }
 },
mounted(){
  this.$bus.$on('checkTodo',this.checkTodo)
  this.$bus.$on('deleteTodo',this.deleteTodo)
  this.$bus.$on('updateTodo',this.updateTodo)
},
beforeDestroy(){
  this.$bus.$off('checkTodo')
  this.$bus.$off('deleteTodo')
  this.$bus.$off('updateTodo')
}

}
</script>

<style lang="less">
// base
body{
  background: #fff;
}
.btn{
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.2);
  border-radius: 4px;
}
.btn-danger{
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f
}
.btn-danger:hover{
  color: #fff;
  background-color: #bd362f;
}
.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(73, 116, 133);
  margin-right: 5px;
}
.btn-edit:hover{
  color: #fff;
  background-color: rgb(73, 116, 133);
}
.btn:focus{
  outline: none;
}
.todo-container{
  width: 600px;
  margin: 0 auto;
  .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius:5px ;
  }
}

</style>
