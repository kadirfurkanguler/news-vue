<template>
    <div class="placeholder">
        <app-nav1 />
        <app-nav2 :ndata="news" />
    </div>
</template>

<script>
import nav1 from './Navs/Nav1'
import nav2 from './Navs/Nav2'
export default {
    props:["news"],
    name: 'Navs',
    components: {
        appNav1: nav1,
        appNav2: nav2
    }
}
</script>

<style>

</style>