<script>
import SingleCard from './SingleCard.vue';
//import Filter  from './Filter.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            optionArchetype: '',
        };
    },
    components:{
		SingleCard,
	},
    methods: {

        selectArchetype (){
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0',{
            params:{
              archetype : this.optionArchetype,
            }}).then((response)=>{
              this.store.cards = response.data.data
            })
        }
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

                <div class="container row p-3">
                    <h4>Search Cards by Archetype</h4>
                    <div class="form col-6">
                        <select v-model="optionArchetype" class="form-select w-50 p-2" id="Select">
                            <option value="" selected>Select Archetype</option>
                            <option v-for="(archetype, i) in store.archetypes" :key="i" :value="archetype.archetype_name" >{{ archetype.archetype_name }}</option>
                        </select>
                        <button @click="selectArchetype" type="submit" class="btn btn-danger my-3">Search</button>
                    </div>
                </div>

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