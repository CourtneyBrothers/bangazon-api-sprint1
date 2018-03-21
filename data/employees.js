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
        let posId = 2;

        employees.push({
            firstName,
            lastName,
            deptId,
            posId
        });
    }

    return employees;
}

module.exports.generateSupervisors = () => {
    let supervisors = [];

    for (let i = 1; i <= 11; i++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let deptId = i;
        let posId = 1;

        supervisors.push({
            firstName,
            lastName,
            deptId,
            posId
        });
    }

    return supervisors;
}
