<template>
  <v-form>
    <v-container>
      <v-row align-center justify-center class="home">
        <v-col>
        <v-text-field v-model="dataID"  label="Vonat ID"></v-text-field>
        <h1>{{dataID}}</h1>
        <v-btn small c-on:click="send"> Elküldés </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import {Fetchy} from './../Fetchy.js'
import Train from './../components/Train.vue'

export default {
  name: 'Home',
  data() {
    return {
      'dataID': ''
    }
  },
  components: {Train
    },
  methods: {
    send: async function () {
      const response = await Fetchy.Get(`http://localhost:3000/train/${this.dataID}`);
      // temp return 'response' to avoid error
      return response
    }
  }
}


</script>
