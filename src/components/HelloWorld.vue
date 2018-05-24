<template>
  <div class="container-fluid">
    <div class="row" style="margin: auto">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <Offer :info = offers[0][0]></Offer>
      </div>
    </div>
    <div class="row" style="margin: auto">
      <div class="col-12 col-sm-12 col-md-4">
        <Offer :info = offers[0][1]></Offer>
      </div>
      <div class="col-12 col-sm-12 col-md-4">
        <Offer :info = offers[0][2]>></Offer>
      </div>
      <div class="col-12 col-sm-12 col-md-4">
        <Offer :info = offers[0][3]></Offer>
      </div>
    </div>
  </div>
</template>

<script>
import Offer from '@/components/Offer'
import api from '../api/api'

export default {
  name: 'HelloWorld',
  components: {Offer},
  mounted: function () {
    this.getOffers()
    console(this.data)
  },
  methods: {
    getOffers () {
      let vm = this
      api.fetchOffers().then(function (response) {
        vm.offers.push(response.data)
        this.data.push(response.data)
        console.log(vm.offers[0][0])
      })
    }
  },
  data () {
    return {
      offers: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
