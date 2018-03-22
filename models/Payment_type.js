const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAll = () => {
    return new Promise( (resolve, reject) => {
        db.all(
        `SELECT *
        FROM payment_types`, 
        (err, paymentTypes) => {
            if (err) return reject(err);
            resolve(paymentTypes);
            }
        );
    });
};

module.exports.getOne = (id) => {
    return new Promise( (resolve, reject) => {
        db.get(
        `SELECT * 
        FROM payment_types
        WHERE payment_types.payment_id = ${id}`,
        (err, paymentType) => {
            if (err) return reject(err);
            resolve(paymentType);
            }
        );
    });
};

module.exports.postOne = ({ customer_id, payment_option, account_number }) => {
    return new Promise ( (resolve, reject) => {
        db.run(
        `INSERT INTO payment_types
        VALUES (${null}, ${customer_id}, "${payment_option}", ${account_number}
        )`,
        (err) => {
            if (err) return reject(err);
            resolve({id: this.lastId});
            }
        );
    });
}