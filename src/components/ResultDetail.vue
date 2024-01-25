<template>
  <div class="container">
    <div class="grid-container justify-content-start result-detail">
      <div class="grid-row">
        <span class="title">Name:</span>
        <span>{{data.name}}</span>
      </div>
      <div class="grid-row">
        <span class="title">ID Card No.:</span>
        <span>{{data.name}}</span>
      </div>
      <div class="grid-row">
        <span class="title">Policy No.:</span>
        <span>{{data.name}}</span>
      </div>
    </div>
  <div>
</template>
<script>
export default {
  name: 'ResultDetail',
  props: {
    data: {
      name:String
    },
  },
};
</script>
<style>
.title {
  font-size: 16px;
  font-weight: 600;
  padding-right: 8px;
  color: black;
}
</style>