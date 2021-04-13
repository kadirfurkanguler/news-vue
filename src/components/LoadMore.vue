<template>
<div class="container">
      <div class="row d-flex align-items-center justify-content-center my-5 font-6">
            <span class="d-flex w-auto align-items-center loadhov" @click="more" role="button">
                <p class="m-0">LOAD MORE</p>
                <i class="fas fa-arrow-down fa-1x p-0 ms-2"></i>
            </span>
        </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pageCount:1,
        }
    },
    methods: {
        more(){
            this.pageCount++;
            this.$emit("page",this.pageCount)
        }
    },
}
</script>

<style>

</style>