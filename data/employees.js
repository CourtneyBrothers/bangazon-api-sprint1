'use strict';

const faker = require('faker');

module.exports.generateEmployees = () => {
    let employees = [];

    for (let i = 0; i < 50; i++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let deptId = faker.random.number({
            min: 1,
            max: 12
        });

        employees.push({
            firstName,
            lastName,
            deptId
        });
    }

    return employees;
}