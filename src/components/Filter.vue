<script>
import { store }  from '../store';
export default {
    data(){
        return{
            store,
            archetypes: [],
            aptionArchetypes: '',
        }
    },
    methods:{
		selectArchetype(value){
			this.store.optionArchetype = value
		}
	}
}
</script>

<template>
    <div class="container row p-3">
        <h4>Search Cards by Archetype</h4>
        <div class="form col-6">
            <select v-model="store.optionArchetype" class="form-select w-50 p-2" id="Select">
                <option value="" selected>Select Archetype</option>
                <option v-for="(archetype, i) in store.archetypes" :key="i" :value="archetype" @click="selectArchetype(value)" >{{ archetype.archetype_name }}</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>