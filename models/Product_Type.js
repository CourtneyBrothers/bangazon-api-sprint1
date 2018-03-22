const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAll = () => {
    return new Promise( (resolve, reject ) => {
        db.all(`SELECT * FROM product_types`,
            (err, prodTypes) => {
                if (err) reject(err);
                resolve(prodTypes);
            });
        });    
};

module.exports.getOne = (id) => {
    return new Promise( (resolve, reject ) => {
        db.all(`SELECT * FROM product_types
        WHERE product_type_id = ${id}`,
            (err, prodType) => {
                if (err) reject(err);
                resolve(prodType);
            });
        });    
};