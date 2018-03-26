"use strict";

const faker = require('faker');

module.exports.generateEmployeeTraining = () => {
    let employeeTraining = [];

    for (let i = 1; i <= 12; i++) {
        let trainingProgram = i;
        for (let j = 1; j < 11; j++) {
            let employeeId = faker.random.number({ min: 1, max: 61 });
            employeeTraining.push({
                trainingProgram,
                employeeId
            })
            ƒ
        }

    }
    return employeeTraining;
}