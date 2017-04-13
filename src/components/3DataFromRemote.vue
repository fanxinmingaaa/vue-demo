<template>
  <div class="hello">
    <div v-for="u in users" :key="u.id">
      {{u.username}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataFromRemote',
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then((resp) => {
        this.users = resp;
      });
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  font-size: 16px;
}
</style>
