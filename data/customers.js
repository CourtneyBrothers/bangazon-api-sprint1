"use strict";

const faker = require('faker');

module.exports.generateCustomers = () => {
    let customers = [];

    for (let i = 0; i < 50; i++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let addressStreet = faker.address.streetAddress();
        let addressCity = faker.address.city();
        let addressState = faker.address.state();
        let addressZip = faker.address.zipCode();
        let accountCreationDate = faker.date.recent().toISOString().split('T')[0];

        customers.push({
            firstName,
            lastName,
            addressStreet,
            addressCity,
            addressState,
            addressZip,
            accountCreationDate
        });
    }

    return customers;
}