"use strict";
const faker = require('faker');
const { dateGen } = require('./dateGenerator');

module.exports.generateEmployeeComputer = () => {
  let empComp = [];

  for (let i = 1; i <= 90; i++) {
    if (i < 36) {
      let computerId = i;
      let employeeId = faker.random.number({ min: 1, max: 50 });
      let startDate = dateGen('2012-01-01', '2018-03-21');
      let endDate = null;
      let lineId = i;

      empComp.push({
        computerId,
        employeeId,
        startDate,
        endDate,
        lineId
      })

    } else {
      let computerId = i;
      let employeeId = faker.random.number({ min: 1, max: 50 });
      let startDate = dateGen('1998-01-01', '2011-12-31');
      let endDate = dateGen('2012-01-01', '2018-03-21');
      let lineId = i;

      empComp.push({
        computerId,
        employeeId,
        startDate,
        endDate,
        lineId
      })
    }
  }
  return empComp;
}