<template>
  <div>
  <span>{{msg|moment("LLL")}}</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: new Date()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
