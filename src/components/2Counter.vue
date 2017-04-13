<template>
  <div class="hello">
    <div><input v-model="msg" style="font-size: 16px;" ></div>
    <div>{{msg}}</div>
    <div>
      {{counter}} <button @click="add">+</button> <button @click="counter = counter - 1">-</button>
    </div>
    <div>
      {{cmsg}}
    </div>
    <com :msg="msg" :counter="counter" @twice="twice"></com>
  </div>
</template>

<script>
import Com from './2.1Com';

export default {
  name: 'counter',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter += 1;
    },
    twice() {
      this.counter *= 2;
    },
  },
  computed: {
    cmsg() {
      return `${this.counter}-${this.msg}`;
    },
  },
  components: {
    com: Com,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  font-size: 16px;
}
</style>
