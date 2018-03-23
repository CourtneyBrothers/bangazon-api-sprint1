const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM product_types`,
            (err, prodTypes) => {
                if (err) reject(err);
                resolve(prodTypes);
            });
    });
};

module.exports.getOne = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM product_types
        WHERE product_type_id = ${id}`,
            (err, prodType) => {
                if (err) reject(err);
                resolve(prodType);
            });
    });
};

module.exports.postOne = ({ product_type_name }) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO product_types VALUES(null, "${product_type_name}")`,
            (err) => {
                if (err) reject(err);
                console.log({ id: this.lastID });
                resolve({ id: this.lastID });
            });
    });
}
module.exports.putOne = ({ product_type_id, product_type_name }) => {
    return new Promise((resolve, reject) => {
        console.log(product_type_id, product_type_name);
        db.run(`UPDATE product_types 
                SET product_type_id = ${product_type_id}, product_type_name = "${product_type_name}"
                WHERE product_type_id = ${product_type_id}`,
            (err) => {
                if (err) reject(err);
                resolve({ id: this.lastID });
            });
    });
}
module.exports.deleteOne = ({ product_type_id, product_type_name }) => {
    return new Promise((resolve, reject) => {
        console.log(product_type_id, product_type_name);
        db.run(`DELETE FROM product_types 
                WHERE product_type_id = ${product_type_id} and product_type_name = ${product_type_name}`,
            (err) => {
                if (err) reject(err);
                resolve({ id: this.lastID });
            });
    });
}