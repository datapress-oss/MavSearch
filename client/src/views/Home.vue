<template>
  <div class="home">
    <input type="text" v-model="dataID">
    <h1>{{ dataID }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

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
    send: function () {
      alert(this.dataID)
    }
  }
}


</script>
