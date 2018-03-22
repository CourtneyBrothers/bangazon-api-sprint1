const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAll = () => {
    return new Promise( (resolve, reject ) => {
        db.all(`SELECT * FROM product_types`,
            (err, direx) => {
                if (err) reject(err);
                resolve(direx);
            });
        });    
};