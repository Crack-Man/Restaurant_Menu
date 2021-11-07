<template>
    <div class="">
        <v-container>
            <h1>{{ category.name }}</h1>
        </v-container>
        <dish-list></dish-list>
    </div>
</template>

<script>
import DishList from "../components/DishList.vue";
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Category",
    computed: mapGetters(['category']),
    methods: mapActions(['getCategoryById']),
    components: {
        'dish-list': DishList
    },
    mounted() {
        this.getCategoryById(this.$route.params.id);
    }
}
</script>

<style lang="scss">

</style>