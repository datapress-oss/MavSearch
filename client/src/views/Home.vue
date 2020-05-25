<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>Input Testing</h2>
    <input type="text" v-model="dataID">
    <br>
    <input type="button" @click="send()" value="SEND">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      'dataID': ''
    }
  },
  components: {
    HelloWorld
    },
  methods: {
    send: function () {
      alert(this.dataID)
    }
  }
}


</script>
