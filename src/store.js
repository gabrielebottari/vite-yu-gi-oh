import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0',
    urlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    archetypes:[],
    loading: false,
    optionArchetype: '',
});