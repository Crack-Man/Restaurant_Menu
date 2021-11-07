<template>
    <v-app>
        <main-header></main-header>
        <router-view></router-view>
    </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
    name: 'App',
    components: {
        'main-header': Header,
    }
};
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}
</style>