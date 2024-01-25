<template>
  <div  v-if="status" class='loading'>
    <div class="ring"></div>
  <div>
</template>
<script>
  export default {
    name: 'Loading',
    props: {
      status: String,
    },
  };
</script>
<style >
.loading {
  position: absolute;
  display: grid;
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 100%;
  margin: 0px;
  margin-top: -20px;
  margin-left: -8px;
  padding: 0px;
  z-index: 1;
  align-content: center;
}
.ring
{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:transparent;
  border:3px solid #ffffff;
  border-radius:50%;
  text-align:center;
  line-height:150px;
  font-family:sans-serif;
  font-size:20px;
  color:#8e0083;
  letter-spacing:4px;
  text-transform:uppercase;
  text-shadow:0 0 10px #8e0083;
  box-shadow:0 0 20px rgba(0,0,0,.5);
}
.ring:before
{
  content:'';
  position:absolute;
  top:-3px;
  left:-3px;
  width:100%;
  height:100%;
  border:3px solid transparent;
  border-top:3px solid #8e0083;
  border-right:3px solid #8e0083;
  border-radius:50%;
  animation:animateC 2s linear infinite;
}
@keyframes animateC
{
  0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
}
@keyframes animate
{
  0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
}
</style>