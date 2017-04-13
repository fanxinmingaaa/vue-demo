<template>
  <div>
    {{`${this.counter} - ${this.msg}`}}
    <button @click="twice"> x2</button>
  </div>
</template>
<script>
export default {
  name: 'com',
  props: ['counter', 'msg'],
  methods: {
    twice() {
      this.$emit('twice');
    },
  },
};
</script>
