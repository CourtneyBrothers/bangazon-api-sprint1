"use strict";

const faker = require('faker');
const {dateGen} = require('./dateGenerator');

module.exports.generateActiveComputers = () => {
    let computers = [];

    for (let i = 0; i < 35; i++) {

        let purchaseDate = dateGen('2012-01-01', '2018-03-20');

        computers.push({
            purchaseDate
        });
    }

    return computers;
}

module.exports.generateDeadComputers = () => {
    let computers = [];

    for (let i = 0; i < 55; i++) {

        let purchaseDate = dateGen('1998-01-01', '2011-12-31');
        let decommissionDate = faker.date.past(6, '2018-03-20');

        computers.push({
            purchaseDate,
            decommissionDate
        });
    }

    return computers;
}