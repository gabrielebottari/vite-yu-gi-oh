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
    methods:{

	},

	//utilizzo api 
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

        axios.get(this.store.urlArchetype)
        .then((response)=>{
            this.store.archetypes = response.data;
            console.log(this.store.archetypes);
            
        });
        
    },
    mounted(){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then((response) =>{
            console.log(response)
            this.store.listCard = response.data.data
        });
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response) =>{
            console.log(response)
            this.store.selectorCard = response.data
        });

    }
}
</script>

<template>

    <AppHeader />

    <AppMain @archetypeSearch="getCardsFromApi()"/>

</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
@import "assets/scss/partials/variables.scss";
</style>