import db from "./db.js";

export const getCategories = () => {
    return db.prepare(`SELECT *
                       FROM categories`).all();
}

export const getCategoryById = (id) => {
    return db.prepare(`SELECT *
                       FROM categories WHERE id = ${id}`).get();
}

export const getDishesByIdCategory = (id) => {
    return db.prepare(
        `SELECT *
        FROM category_of_dishes INNER JOIN dishes
        ON id_dish = id
        WHERE id_category = ${id}`).all();
}

export const addCategory = (data) => {
    return db.prepare(`INSERT INTO categories (name)
                       VALUES (?)`).run(data.name);
}

export const addDish = (data) => {
    const addToDishes = db.prepare(`INSERT INTO dishes (name, ingredients, price)
                                    VALUES (?, ?, ?)`);
    const addToCategoryOfDishes = db.prepare(`INSERT INTO category_of_dishes (id_category, id_dish)
                                              VALUES (?, ?)`);

    const transaction = db.transaction((data) => {
        const requestAddToDishes = addToDishes.run(data.name, data.ingredients, data.price);
        const lastIdDish = requestAddToDishes.lastInsertRowid;

        for (const category of Object.values(data.categoryList)) {
            addToCategoryOfDishes.run(category, lastIdDish);
        }
    });

    return transaction(data);
}