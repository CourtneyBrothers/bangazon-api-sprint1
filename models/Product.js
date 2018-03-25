'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bangazon.sqlite');

// fetches all rows and columns of products table
module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM products`, (err, products) => {
            if (err) return reject(err);
            resolve(products);
        });
    });
}

// fetchs all columns of product row matching product_id passed into route params
module.exports.getOne = (id) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM products WHERE products.product_id = ${id}`, 
        (err, product) => {
            if (err) return reject(err);
            resolve(product);
        });
    });
}

// posts new row to product table with correlating JSON data passed into column values
module.exports.postOne = ({ product_name, product_type, price, description, customer_id, listing_date}) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO products VALUES(
            null, 
            "${product_name}",
            "${product_type}",
            ${price},
            "${description}",
            ${customer_id},
            "${listing_date}"
        )`, (err) => {
                if (err) return reject(err);
                resolve({ id: this.lastID });
            });
    });
}

// puts/overwrites data for all columns in product row specified by product_id in route params
module.exports.putOne = (id, { product_name, product_type, price, description, customer_id, listing_date }) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE products 
            SET product_name = "${product_name}",
                product_type = ${product_type},
                price = ${price},
                description = "${description}",
                customer_id = ${customer_id},
                listing_date = "${listing_date}"
            WHERE product_id = ${id}`, 
            (err) => {
                if(err) return reject(err);
                resolve({ changes: this.changes });
            });
    });
}

// deletes row from products match product_id to route param integer
module.exports.deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM products 
                WHERE product_id = ${id}`,
            (err) => {
                if(err) return reject(err);
                resolve({ changes: this.changes });
            });
    });
}

// pulls all rows from order_products that match product id passed into route params
module.exports.productOnOrders = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM order_products WHERE order_products.product_id = ${id}`,
            (err, products) => {
                if (err) return reject(err);
                resolve(products);
        });
    });
}
