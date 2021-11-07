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
                Создать категорию
            </v-btn>
        </template>

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Добавить категорию</span>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model.trim="newCategory.name"
                        label="Название"
                        type="text"
                        :rules="rules.name"
                        required
                    ></v-text-field>
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
                        @click="saveCategory"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "AddCategory",
    data() {
        return {
            dialogShow: false,
            newCategory: {
                name: ''
            },
            rules: {
                name: [
                    v => !!v || 'Введите название',
                    v => this.allCategoryNames.indexOf(v) === -1 || 'Такое название уже существует'
                ],
            },
            valid: true,
        }
    },
    computed: mapGetters(['allCategoryNames']),
    methods: {
        ...mapActions(['getCategories', 'addCategory']),
        async saveCategory() {
            if (this.$refs.form.validate()) {
                await this.addCategory(this.newCategory);
                this.newCategory.name = '';
                this.dialogShow = false;
            }
        }
    }
}
</script>

<style lang="scss">
</style>