<template>
    <div class="">
        <h1>{{  }}</h1>
        <v-container>
            <div v-if="allDishesOfCategory.length" id="dish-list">
                <v-card
                    v-for="dish in allDishesOfCategory"
                    :key="dish.id"
                    elevation="7"
                    max-width="374"
                    class="my-12 dish"
                >
                    <v-card-title>{{ dish.name }}</v-card-title>
                    <v-card-text>
                        <div v-if="dish.ingredients">{{ dish.ingredients }}</div>
                        <div>{{ dish.price }} рублей</div>
                    </v-card-text>
                </v-card>
            </div>
            <div v-else>
                Список блюд пуст
            </div>
        </v-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "DishList",
    computed: mapGetters(['allDishesOfCategory']),
    methods: mapActions(['getDishesByIdCategory']),
    mounted() {
        this.getDishesByIdCategory(this.$route.params.id);
    }
}
</script>

<style lang="scss">
#dish-list {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 30px;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 30px;
        grid-column-gap: 15px;
    }

    @media (max-width: 880px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 15px;
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }

    .dish {
        padding: 20px;
        margin: 0 !important;
        @media (max-width: 700px) {
            font-size: 14px;
        }
        @media (max-width: 560px) {
            max-width: 100% !important;
        }
    }
}
</style>