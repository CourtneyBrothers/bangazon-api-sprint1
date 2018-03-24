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



// PUT



