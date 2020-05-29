<template>
  <div class="home">
    <input type="text" v-model="dataID">
    <h1>{{ dataID }}</h1>
    <button v-on:click="send">
      elküldés
    </button>
  </div>
</template>

<script>
import {Fetchy} from './../Fetchy.js'

export default {
  name: 'Home',
  data() {
    return {
      'dataID': ''
    }
  },
  components: {
    },
  methods: {
    send: async function () {
      const response = await Fetchy.Get(`http://localhost:3000/train/${this.dataID}`);
      
    }
  }
}


</script>
