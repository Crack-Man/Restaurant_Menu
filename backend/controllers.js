import {getCategories, getCategoryById, getDishesByIdCategory, addCategory, addDish} from "./models.js";

export const showCategories = (req, res) => {
    res.send(getCategories());
}

export const showCategoryById = (req, res) => {
    res.send(getCategoryById(req.params.id));
}

export const showDishesByIdCategory = (req, res) => {
    res.send(getDishesByIdCategory(req.params.id));
}

export const createCategory = (req, res) => {
    addCategory(req.body);
    res.send(getCategories());
}

export const createDish = (req, res) => {
    addDish(req.body);
    if (req.body.id_page) {
        res.send(getDishesByIdCategory(req.body.id_page));
    }
}