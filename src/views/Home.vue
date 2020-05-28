<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      num: 0
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    aa() {
      const a = Math.round();
      this.$data.num = a;
    }
  },
  mounted() {
    // TODO
  }
};
</script>
