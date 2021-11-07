<template>
    <div class="">
        <v-container id="category-list">
            <v-card
                :href="`categories/${category.id}`"
                v-for="category in allCategories"
                :key="category.id"
                elevation="7"
                max-width="374"
                class="my-12 category"
            >
                {{ category.name }}
            </v-card>
        </v-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "CategoryList",
    computed: mapGetters(['allCategories']),
    methods: mapActions(['getCategories']),
    mounted() {
        this.getCategories();
    }
}
</script>

<style lang="scss">
#category-list {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 30px;
    
    @media (max-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 30px;
        grid-column-gap: 15px;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .category {
        padding: 20px;
        margin: 0 !important;
        @media (max-width: 700px) {
            font-size: 14px;
        }
    }
}
</style>