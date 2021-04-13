<template>
  <div>
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <app-placeholder :news="newss" />
    <app-container v-for="(item,index) in page" :key="index" :news="news.slice(((item-1)*14),((item)*14))"/>
    <app-load-more v-if="show" @page="pageValue"/>
    <app-footer />
  </div>
</template>

<script>
import placeholder from './components/Placeholder'
import container from './components/Container'
import loadmore from './components/LoadMore'
import footer from './components/Footer' 
export default {
  data() {
    return {
      page:1,
      moun:false,
    }
  },
  created() {
    this.$store.dispatch("loadNews")
  },
  computed:{
    newss(){
      return [...this.$store.state.news]
    },
    news(){
      return [...this.$store.state.news].slice(0,((this.page+1)*14))
    },
    isLoading() {
        if (!this.moun) {
          return {
            display: "block"
          }
        } else {
          return {
            display: "none"
          }
        }
      },
      show() { 
        return (this.page < 10) ? true : false
      }
  },
  methods: {
    pageValue(params){
      this.page=params;
    }
  },
  watch:{
    
  },
  components: {
    appPlaceholder: placeholder,
    appContainer: container,
    appLoadMore: loadmore,
    appFooter: footer
  },

  updated() {
    this.$nextTick(function () {
    this.moun=true
  })
  },
}
</script>

<style>

</style>
