"use strict";

const faker = require('faker');
const { dateGen } = require('./dateGenerator');

const randomAmount = () => Math.floor(Math.random() * 8000) + 10000;


module.exports.generateProducts = () => {
    let products = [];

    for (let i = 1; i <= 150; i++) {
        let productName = faker.commerce.productName();
        let productType = faker.random.number({min:1,max:11});
        let price = faker.commerce.price();
        let description = faker.hacker.phrase();
        let customerId = faker.random.number({min:1,max:50});
        let dateCreated = dateGen('2017-03-20', '2018-03-20'); 

        products.push({
            productName,
            productType,
            price,
            description,
            customerId,
            dateCreated
        });

    }

    return products;

}