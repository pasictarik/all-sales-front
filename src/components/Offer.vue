<template>
  <div class="card text-center">
    <img class="card-img-top" :src=info.imageUrl alt="Image not found">
    <div class="card-body">
      <h5 class="card-title">{{info.title}}</h5>
      <p class="card-text">{{info.subtitle}}</p>
      <a class="btn btn-primary" style="float: right">Buy now</a>
      <p style="float: right">{{info.price}}</p>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',
  props: ['info'],
  mounted: function () {
    console.log(this.info);
  },
  data () {
    return {
      imageURL: '',
      title: '',
      subtitle: ''
    }
  }
}
</script>

<style scoped>
  .card {
    width: 100%;
  }
  .card-img-top {
    max-height: 250px;
  }
</style>
