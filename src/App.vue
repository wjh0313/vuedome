<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.clearfix::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
*{
  margin: 0;
  padding: 0;
}
body{
  min-width: 1200px;
}
a{
  text-decoration: none;
  color: #000;
}
.ml-10
{
  margin-left: 10px;
}
.ml-12
{
  margin-left: 12px;
}
.mt-40
{
  margin-top: 40px;
}
.haveHand
{
  cursor: pointer;
}
</style>
