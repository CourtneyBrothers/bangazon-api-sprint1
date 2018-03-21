'use strict';

const faker = require('faker');

const randomAmount = () => Math.floor(Math.random() * 8000) + 10000;


module.exports.generateDepartments = () => {
    let departments = [];

    for (let i = 1; i <= 12; i++) {
        let deptName = faker.commerce.department();
        let supervisorId = i;
        let budget = randomAmount();

        departments.push({
            deptName,
            supervisorId,
            budget
        });

    }

    return departments;

}