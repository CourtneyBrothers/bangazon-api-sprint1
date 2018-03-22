const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazon.sqlite");

module.exports.getAllPaymentTypes = () => {
    return new Promise( (resolve, reject) => {
        db.all(
        `SELECT * payment_option
        FROM payment_types`, 
        (err, paymentTypes) => {
            if (err) return reject(err);
            resolve(paymentTypes);
            }
        );
    });
};

module.exports.getOnePaymentType = () => {
    return new Promise( (resolve, reject) => {
        db.get(
        `SELECT payment_option
        FROM payment_types
        WHERE payment_id = ${id}`,
        (err, paymentType) => {
            if (err) return reject(err);
            resolve(paymentTypes);
            }
        );
    });
};