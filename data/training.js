"use strict";

const faker = require("faker");
const { dateGen } = require("./dateGenerator");

module.exports.generateTrainingPrograms = () => {
  let trainingPrograms = [];

  for (let i = 0; i < 12; i++) {
    let programTitle = faker.company.bs();
    let startDate = dateGen("2012-01-01", "2018-12-13");
    let endDate = dateGen(startDate, "2019-3-20");
    let maxAttendees = faker.random.number({ min: 20, max: 40 });

    trainingPrograms.push({
      programTitle,
      startDate,
      endDate,
      maxAttendees
    });
  }

  return trainingPrograms;
};
