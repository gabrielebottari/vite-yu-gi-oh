<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
export default {
    data() {
        return {
            cards:[]
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
    created(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0')
            .then((response) => {
                this.cards= response.data.data;
            })
    }
}
</script>

<template>

    <AppHeader />

    <AppMain :cards="cards"/>

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
@import "assets/scss/partials/variables.scss";
</style>