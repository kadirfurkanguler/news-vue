<template>
<div class="modal fade" :id="news.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content card text-center">
            <div class="card-header">
                {{news.source.title}}
            </div>
            <div class="modal-body px-md-5">

                <div class="border border-2 rounded mt-3 mx-auto" style="width: fit-content;">
                    <img class="card-image img-fluid" :src="news.image" alt="">
                </div>
                <h5 class="card-title pt-3 mt-5 mb-5">{{news.title}}</h5>
                <p class="card-text lh-md">
                    {{news.body}}
                </p>
            </div>
            <div class="card-footer text-muted">
                <a href="#" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:["news"]
}
</script>

<style>

</style>