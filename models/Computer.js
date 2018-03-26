'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bangazon.sqlite');

// GET
module.exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM computers`, (err, computers) => {
            if (err) return reject(err);
            resolve(computers);
        });
    });
};

module.exports.getOne = id => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM computers WHERE computers.computer_id = ${id}`, (err, computer) => {
            if (err) return reject(err);
            resolve(computer);
        });
    });
};

// POST
module.exports.postOneLive = ({purchase_date}) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO computers VALUES (null, "${purchase_date}", null)`, (err) => {
            if (err) return reject(err);
            resolve({id: this.lastID});
        });
    });
};

module.exports.postOneDead = ({purchase_date, decommission_date}) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO computers VALUES (null, "${purchase_date}", "${decommission_date}"`, (err) => {
            if (err) return reject(err);
            resolve({id: this.lastID});
        });
    });
};

// PUT
module.exports.putOne = ({id}, {purchase_date, decommission_date}) => {
    return new Promise((resolve, reject) => {
        db.serialize( () => {
            db.run(`UPDATE computers SET computer_id=${id}, purchase_date="${purchase_date}", decommission_date="${decommission_date}" WHERE computer_id=${id}`);
            db.run(`UPDATE employee_computers SET computer_id=${id}, end_date="${decommission_date}" WHERE computer_id =${id}`)
            resolve({id: this.lastID});
            });

        })
    };


// DELETE
// No delete functionality - computers cannot be deleted from the system

