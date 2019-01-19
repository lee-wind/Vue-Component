<template>
  <div id="app">
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-to{
        opacity: 1;
    }
    .fade-enter-active, .fade-leave-active{
        transition: all .3s;
    }
    .fade-leave-to{
        opacity: 0;
    }
}
</style>
