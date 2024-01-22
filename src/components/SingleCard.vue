<script>
export default {
    data() {
        return {

        };
    },
    props:{
        cards : Object
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <div class="container">
            <select class="m-3 p-1 rounded-2 w-25" name="search" id="archetype">
                <option>Alien</option>
                <option>Elemental HERO</option>
                <option>Destiny HERO</option>
            </select>
            <div class="bg-white p-5">
                <div class=" text-white bg-dark p-3">
                    Found {{ cards.length }} cards
                </div>
                <div class="row m-0">
                    <div v-for="(card, i) in cards" class="description text-center col-lg-3 col-md-6 col-sm-12 p-0 mb-2">
                        <div class="mb-2">
                            <img :src="card.card_images[0].image_url" alt="cardimg">
                        </div>
                        <div class="p-2 fs-4">
                            <p class="text-white">{{ card.name }}</p>
                            <p>{{ card.archetype }}</p>
                        </div>
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