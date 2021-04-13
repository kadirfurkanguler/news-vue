<template>
    <div class="footer py-5">
        <app-footer-nav />
        <app-social-media />
    </div>
</template>

<script>
import foot1 from './Navs/FooterNav1'
import foot2 from './Navs/FooterNav2'
export default {
    name: 'Footer',
    components: {
        appFooterNav: foot1,
        appSocialMedia: foot2
    }
}
</script>

<style>

</style>