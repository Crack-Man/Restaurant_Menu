<template>
    <div class="">
        <category-list></category-list>
    </div>
</template>

<script>
import CategoryList from "../components/CategoryList";

export default {
    name: "Home",
    components: {
        'category-list': CategoryList,
    }
}
</script>

<style lang="scss">

</style>