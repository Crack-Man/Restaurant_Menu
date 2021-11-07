import axios from 'axios'

export default {
    state: {
        categoryList: [],
        category: {}
    },
    actions: {
        async getCategories(ctx) {
            const response = await axios.get(`http://localhost:5000/categories/`);
            ctx.commit('updateCategories', response.data);
        },

        async getCategoryById(ctx, id) {
            const response = await axios.get(`http://localhost:5000/category_id/${id}`);
            ctx.commit('updateCategory', response.data);
        },

        async addCategory(ctx, newCategory) {
            const response = await axios.post(`http://localhost:5000/categories/`, newCategory);
            ctx.commit('updateCategories', response.data);
        }
    },
    mutations: {
        updateCategories(state, categoryList) {
            state.categoryList = categoryList;
        },

        updateCategory(state, category) {
            state.category = category
        }
    },
    getters: {
        category(state) {
            return state.category;
        },

        allCategories(state) {
            return state.categoryList;
        },

        allCategoryNames(state) {
            return state.categoryList.map((v) => {return v.name});
        },
    },
}