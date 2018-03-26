"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

// GET
module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM orders`, (err, orders) => {
            if (err) return reject(err);
            resolve(orders);
        });
    });
};

module.exports.getOne = id => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM orders WHERE orders.order_id = ${id}`,
            (err, order) => {
                if (err) return reject(err);
                resolve(order);
            }
        );
    });
};

module.exports.getProductsInOrder = (id) => {
    return new Promise(( resolve, reject) => {
        db.all(`SELECT product_id
                FROM order_products AS op
                WHERE op.order_id = ${id}`,
                (err, prods) => {
                    if (err) return reject(err);
                    let allProdIds = prods.map(prod => prod.product_id);
                    resolve(allProdIds);
                });
    });
}

// POST
module.exports.postOne = ({customer_id, payment_type}) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO orders VALUES (null, ${customer_id}, ${payment_type})`, (err) => {
            if (err) return reject(err);
            resolve({id: this.lastID})
        })
    })
}

// PUT
module.exports.putOne = ({id}, {customer_id, payment_type}) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE orders SET order_id=${id}, customer_id=${customer_id}, payment_type=${payment_type}
                WHERE order_id=${id}`, (err) => {
                    if (err) return reject(err);
                    resolve({id: this.lastID})
                }
        )
    })
}

// DELETE
module.exports.deleteOne = (id) => {
    return new Promise((resolve, reject) => {
        db.serialize( () => {
            db.run(`DELETE FROM orders WHERE order_id=${id}`);
            db.run(`DELETE FROM order_products WHERE order_id=${id}`);
            resolve({id: this.lastID})
        })  
    })
};
