<template>
  <div id="wrapper">
    <div class="in">
      <input type="text"
             id="todo-item-name"
             v-model="todoItemName"
             @keyup.enter.prevent="addTodo"
             placeholder="Let's do something useful!"/>
    </div>

    <div class="out">
      <ul>
        <li class="item" v-for="todo in todos" :key="todo.id">
          {{ todo.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'landing-page',
    data() {
      return {
        todoItemName: '',
      };
    },
    methods: {
      addTodo() {
        this.$store.dispatch('ADD_TODO', this.todoItemName);
        this.todoItemName = '';
      }
    },
    computed: {
      ...mapState({
        todos: state => state.Todo.todos
        // here state.Todo comes from: store/modules/Todo.js
      })
    }
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body {
    font-family: 'Source Sans Pro', sans-serif;
    height: 100vh;
    width: 100vw;
  }

  #wrapper {
    background: radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
    );
  }

  .in {
    text-alignt: center;
  }

  #todo-item-name {
    font-size: 36px;
    width: 100vw;
    text-align: center;
    align-content: center;
  }

  .out {
    overflow: scroll;
    text-align: center;
  }

  .item {
    list-style: none;
    font-size: 24px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
