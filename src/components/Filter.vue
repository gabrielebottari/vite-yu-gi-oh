<script>
import { store }  from '../store';
export default {
    data(){
        return{
            store,
            archetypes: [],
        }
    }
}
</script>

<template>
    <div class="container justify-content-center align-items-center row p-3">
        <h4>Search Cards by Type</h4>
        <div class="form col-6">
            <select v-model="store.optionArchetype" class="form-select w-50 p-2" id="Select">
                <option value="">Select Archetype</option>
                <option v-for="(archetype, i) in store.archetypes" :key="i" :value="archetype" >{{ archetype.archetype_name }}</option>
            </select>
        </div>
        <button class="btn btn-danger p-2 col-2">Search</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>