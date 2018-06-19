<template>
  <div>
    {{ msg }}
    <br/>
    <div>
      <button @click="add">click</button>
    </div>
    {{ testMsg }}
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'dd',
      testMsg: ''
    }
  },
  methods: {
    add () {
      console.log(this.$store)
      this.testMsg += this.$store.state.testMsg
    }
  }
}
</script>

<style scoped>

</style>
