<template>
    <v-dialog
        v-model="dialogShow"
        persistent
        max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="button"
                text
                color="white"
                v-bind="attrs"
                v-on="on"
                elevation="0"
            >
                Добавить блюдо
            </v-btn>
        </template>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Добавить блюдо</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model.trim="newDish.name"
                        label="Название"
                        type="text"
                        :rules="rules.name"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model.trim="newDish.ingredients"
                        label="Ингредиенты"
                        type="text"
                    ></v-text-field>
                    <v-text-field
                        v-model.trim="newDish.price"
                        label="Цена"
                        type="number"
                        suffix="рублей"
                        :rules="rules.price"
                        required
                    ></v-text-field>
                    <v-select
                        v-model="newDish.categoryList"
                        :items="allCategories"
                        :item-text="'name'"
                        :item-value="'id'"
                        label="Категория"
                        multiple
                        chips
                        :rules="rules.categoryList"
                        required
                    >

                    </v-select>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="dialogShow = false"
                    >
                        Закрыть
                    </v-btn>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="saveDish"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddDish",
    data() {
        return {
            dialogShow: false,
            newDish: {
                name: '',
                ingredients: '',
                price: '',
                categoryList: [],
                id_page: this.$route.params.id
            },
            rules: {
                name: [
                    v => !!v || 'Введите название',
                ],
                categoryList: [
                    v => v.length !== 0 || 'Выберите как минимум одну категорию',
                ],
                price: [
                    v => (v && v >= 0) || 'Введите положительное значение',
                ]
            },


            valid: true,
        }
    },
    computed: mapGetters(['allCategories']),
    methods: {
        ...mapActions(['getCategories', 'addDish']),
        async saveDish() {
            if (this.$refs.form.validate()) {
                await this.addDish(this.newDish);
                this.newDish.name = '';
                this.newDish.recipe = '';
                this.newDish.price = '';
                this.newDish.categoryList = [];
                this.dialogShow = false;
            }
        }
    },
    mounted() {
        this.getCategories();
    }
}
</script>

<style scoped>

</style>