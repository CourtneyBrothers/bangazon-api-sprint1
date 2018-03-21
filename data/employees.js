'use strict';

const faker = require('faker');

module.exports.generateEmployees = () => {
    let employees = [];

    for (let i = 0; i < 50; i++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let deptId = faker.random.number({
            min: 1,
            max: 11
        });

        employees.push({
            firstName,
            lastName,
            deptId,
        });
    }

    return employees;
}