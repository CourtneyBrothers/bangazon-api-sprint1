"use strict";

const faker = require('faker');

module.exports.generateActiveComputers = () => {
    let computers = [];

    for (let i = 0; i < 35; i++) {

        let purchaseDate = faker.date.between('2012-01-01', '2018-03-20').toISOString().split('T')[0];

        computers.push({
            purchaseDate
        });
    }

    return computers;
}

module.exports.generateDeadComputers = () => {
    let computers = [];

    for (let i = 0; i < 55; i++) {

        let purchaseDate = faker.date.between('1998-01-01', '2011-12-31').toISOString().split('T')[0];
        let decommissionDate = faker.date.past(6, '2018-03-20').toISOString().split('T')[0];

        computers.push({
            purchaseDate,
            decommissionDate
        });
    }

    return computers;
}