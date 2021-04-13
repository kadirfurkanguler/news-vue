<template>
    <nav class="navbar navbar-expand-lg navbar-light p-0 border-start border-end">
        <div class="container-fluid border-top align-items-center p-0">
            <div  @click="changeRand" role="button" data-bs-toggle="modal" :data-bs-target="'#'+id">
            <i  class="fas fa-newspaper fa-5x p-4 border-end"></i>
            </div>
             <app-modal :news="{...ndata[rand],id:id}"></app-modal>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <i class="fas fa-search fa-5x p-4 border-start order-lg-1"></i>
            <div class="collapse navbar-collapse order-lg-0" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto text-center align-items-center font-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#">City</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">People</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bussines</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Food</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Style</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Children</a>
                    </li>
                </ul>
            </div>
        </div>
       
    </nav>
</template>

<script>
import modal from '../Cards/Modal'
export default {
    props:["ndata"],
    components:{
        appModal:modal,
    },
    data() {
    return {
        id:Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
        rand: Math.floor(Math.random()*140)   
    }
  },
  created() {
        console.log(this.rand)
      
  },
  methods: {
      changeRand(){
        this.rand=Math.floor(Math.random()*140)
        console.log(this.rand)
      }
  },
}
</script>

<style>

</style>