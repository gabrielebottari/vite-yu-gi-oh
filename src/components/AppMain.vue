<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        };
    },
    components:{
		SingleCard,
	},
    methods: {

    }
}
</script>

<template>

    <main>
        <div class="container">
            <div v-if="store.loading" class="d-flex justify-content-center p-5">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
            <div v-else>
            <select class="m-3 p-1 rounded-2 w-25" name="search" id="archetype">
                <option>Alien</option>
                <option>Elemental HERO</option>
                <option>Destiny HERO</option>
            </select>
            <div class="bg-white p-5">
                <div class=" text-white bg-dark p-3">
                    Found {{ store.cards.length }} cards
                </div>
                <div class="row m-0">
                    <SingleCard 
                    v-for="(card, i) in store.cards" 
                    :key="i" 
                    class="description text-center col-lg-3 col-md-6 col-sm-12 p-0 mb-2"
                        :card="card"/>
                </div>
            </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;
@use "../assets/scss/partials/mixins.scss" as *;

main {

background-color: $primary;
.description {
    background-color: $primary;

    img {
        width: 100%;
    }
}
}

</style>