<template>
  <div class="row">
    <div class="m-sm-12 full">
      <Offer></Offer>
    </div>
  </div>
</template>

<script>
import Offer from '@/components/Offer'
export default {
  name: 'HelloWorld',
  components: {Offer},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .full {
    width: 100%;
  }
  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
