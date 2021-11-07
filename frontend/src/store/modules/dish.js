import axios from 'axios'

export default {
    state: {
        dishListOfCategory: []
    },
    actions: {
        async getDishesByIdCategory(ctx, id) {
            const response = await axios.get(`http://localhost:5000/categories/${id}`);
            ctx.commit('updateDishesOfCategory', response.data);
        },

        async addDish(ctx, newDish) {
            const response = await axios.post(`http://localhost:5000/dishes/`, newDish);
            ctx.commit('updateDishesOfCategory', response.data);
        }
    },
    mutations: {
        updateDishesOfCategory(state, dishList) {
            state.dishListOfCategory = dishList;
        }
    },
    getters: {
        allDishesOfCategory(state) {
            return state.dishListOfCategory;
        }
    },
}