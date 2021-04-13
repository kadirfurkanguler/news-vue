<template>
<div>
    <div class="card card-placeholder card-bg ratio ratio-61x50" role="button" data-bs-toggle="modal" :data-bs-target="'#'+id"
      style= "background-size:cover!important; height: 350px !important;" :style="{ background: 'url(' + newsdata.image + ')' }">
    <div class="card-body p-0 d-flex flex-column justify-content-between title-shown">
        <div></div>
        <span class="px-5">
            <h6 class="card-title font-4 py-3 px-1 fs-3">
                {{newsdata.title}}
                </h6>
        </span>

        <div class="d-flex justify-content-between pt-3 font-5 border-top" style="font-size: small;">
            <p class="ms-3">{{newsdata.date}}</p>
            <!-- <span class="d-flex ">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px">
                    <path fill-rule="evenodd" fill="rgb(230, 230, 230)" d="M14.999,10.000 L14.999,1.000 C14.999,0.450 14.551,-0.000 14.000,-0.000 L1.001,-0.000 C0.451,-0.000 0.000,0.450 0.000,1.000 L0.000,15.000 L4.000,11.000 L14.000,11.000 C14.551,11.000 14.999,10.550 14.999,10.000 ZM18.999,4.000 L17.001,4.000 L17.001,13.000 L4.000,13.000 L4.000,15.000 C4.000,15.550 4.451,16.000 5.000,16.000 L16.000,16.000 L20.001,20.000 L20.001,5.000 C20.001,4.450 19.550,4.000 18.999,4.000 Z" />
                </svg>
                <p class="ms-2 me-3">12</p>
            </span> -->
        </div>
    </div>
    </div>      
    <app-modal :news="{...newsdata,id:id}"></app-modal>

</div>
</template>

<script>
import modal from './Modal'
export default {
  props:["newsdata"],
    data() {
    return {
      id:Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    }
  },
  components:{
      appModal:modal
  }

}
</script>

<style>
    
</style>