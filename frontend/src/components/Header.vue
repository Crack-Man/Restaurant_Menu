<template>
    <div class="">
        <v-navigation-drawer
            app
            left
            absolute
            temporary
            v-model="drawer"
        >
            <v-list>
                <v-list-item-group
                    active-class="red--text text--accent-4"
                >
                    <v-list-item
                        v-for="(page, index) in menu_pages"
                        :key="index"
                    >
                        <v-list-item-title>
                            <router-link class="link" :to="page.url">{{ page.name }}</router-link>
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            color="red"
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="header-spacer">
            </v-spacer>
            <div>
                <add-category></add-category>
                <add-dish></add-dish>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
import AddCategory from "./AddCategory";
import AddDish from "./AddDish";
export default {
    name: "Header",
    data() {
        return {
            drawer: false,
            menu_pages: [
                {
                    name: 'Категории',
                    url: '/'
                }
            ]
        }
    },
    components: {
        "add-category": AddCategory,
        "add-dish": AddDish
    }
}
</script>

<style lang="scss">
.link {
    text-decoration: none;
    color: #000 !important;
}

.button {
    @media (max-width: 700px) {
        display: block;
        height: auto !important;
    }

    @media (max-width: 450px) {
        font-size: 12px !important;

    }
}
.button:last-child {
    @media (max-width: 700px) {
        margin-top: 10px;
    }
}
</style>