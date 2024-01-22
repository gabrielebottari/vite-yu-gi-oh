<script>
export default {
    data() {
        return {

        };
    },
    props:{
        card : Object,
    },
    methods: {

    }
}
</script>

<template>
    <div class="single-card">

        <div class="mb-2">
            <img :src="card.card_images[0].image_url" alt="cardimg">
        </div>
        <div class="p-2 fs-4">
            <p class="text-white">{{ card.name }}</p>
            <p>{{ card.archetype }}</p>
        </div>

    </div>
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