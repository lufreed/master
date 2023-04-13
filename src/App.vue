<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/head/Header.vue'
import Footer from './components/foot/Footer.vue'
export default {
	name: 'App',
	components: {Header,Footer},
	computed:{
    storage(){
      return this.$store.getters.storage
    }
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;

	}
  /*page{*/
  /*    font-size: 18px;*/
  /*    color: #333;*/
  /*    background-color: #9cecfb;*/
  /*}*/



</style>
