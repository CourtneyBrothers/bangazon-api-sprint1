'use strict';

const faker = require('faker');

const payTypes = ["PayPal", "Bitcoin", "Visa", "Mastercard", "DogeCoin", "Venmo", "Amex", "Gold", "MagicBeanz"]
const payRandom = () => Math.floor(Math.random() * payTypes.length);


module.exports.generatePaymentTypes = () => {
    let paymentTypes = [];

    for (let i = 0; i<30; i++) {
        let customerId = faker.random.number({min:1,max:50});
        let paymentOption = payTypes[payRandom()];
        let accountNumber = faker.finance.account();
    
        paymentTypes.push({
            customerId,
            paymentOption,
            accountNumber
        });

    }

    return paymentTypes;

}