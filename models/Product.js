'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bangazon.sqlite');


module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM products`, (err, products) => {
            if (err) return reject(err);
            resolve(products);
        });
    });
}

module.exports.getOne = (id) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM products WHERE products.product_id = ${id}`, 
        (err, product) => {
            if (err) return reject(err);
            resolve(product);
        });
    });
}

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
                resolve({ id: this.lastID });
                reject(err => console.log("WOOPS, not posting to DB", err));
            });
    });
}

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
                resolve({ id: this.lastID });
                reject(err => console.log("WOOPS, not putting to DB", err));
            });
    });
}