<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store,
            isLoading: true,
        };
    },
    components: {
        AppHeader,
        AppMain,
    },  
    methods: {

    },
    created() {
        this.store.loading = true;
        axios.get(this.store.baseUrl)
        .then((response) => {
        this.store.cards = response.data.data;
        this.isLoading = false;
        console.log(this.store.cards);
      })
      .finally(() => {
            this.store.loading = false;
        });
  },
}
</script>

<template>

    <AppHeader />

    <AppMain />

</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
@import "assets/scss/partials/variables.scss";
</style>