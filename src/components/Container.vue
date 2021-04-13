<template>
  <div class="container mt-5 pt-3">
        <div class="row">
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3 ">
                <app-card1 :newsdata="news[0]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card1 :newsdata="news[1]"/>
            </div>
            <div class="col-lg-6 col-12 text-center px-md-4 px-2 my-3">
                <app-card2 :newsdata="news[2]"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[3]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[4]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[5]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[6]"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-12 text-center px-md-4 px-2 my-3">
                <app-card2 :newsdata="news[7]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card1 :newsdata="news[8]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card1 :newsdata="news[9]"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[10]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[11]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[12]"/>
            </div>
            <div class="col-lg-3 col-6 text-center px-md-4 px-2 my-3">
                <app-card4 :newsdata="news[13]"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import card1 from './Cards/Card1'
import card2 from './Cards/Card2'
//import card3 from './Cards/Card3'
import card4 from './Cards/Card4'
export default {
    name: 'Container',
    props:["news"],
    components: {
    appCard1: card1,
    appCard2: card2,
 //   appCard3: card3,
    appCard4: card4
    }
}
</script>

<style>

</style>