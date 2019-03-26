<template>
  <div id="app" @click="hideComponent">
      <transition name="fade" mode="out-in">
          <router-view/>
      </transition>
  </div>
</template>

<script>
import Bus from './bus';
export default {
    name: 'App',
    mounted(){

    },
    methods:{
        hideComponent(){
            Bus.$emit('hideDate');
            Bus.$emit('hideTime');
            Bus.$emit('hideSelectList');
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    font-size: 100px;
    /*margin-top: 60px;*/
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
