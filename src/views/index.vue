<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@components/HelloWorld.vue";
  import abc from "./abc";
  import './index.css';
  import './index.scss';

  console.log('abc', abc);
  export default {
    name: "home",
    components: {
      HelloWorld
    }
  };
</script>
