'use strict';

const { createWriteStream } = require('fs');
const { generateCustomers } = require("../data/customers");
const { generatePaymentTypes } = require("../data/payment_types");

const { generateEmployees, generateSupervisors } = require("../data/employees");
const { generateActiveComputers, generateDeadComputers } = require("../data/computers");
const { generateTrainingPrograms } = require("../data/training");



// customers data
let customers = generateCustomers();
let custStream = createWriteStream(`./json/customers.json`);
custStream.write(JSON.stringify(customers));

let paymentTypes = generatePaymentTypes();
let payStream = createWriteStream(`./json/payment_types.json`);
payStream.write(JSON.stringify(paymentTypes));





// employee data
let employees = generateEmployees();
let empStream = createWriteStream(`./json/employees.json`);
empStream.write(JSON.stringify(employees));

let supervisors = generateSupervisors();
let supStream = createWriteStream(`./json/supervisors.json`);
supStream.write(JSON.stringify(supervisors));

let activeComputers = generateActiveComputers();
let compActiveStream = createWriteStream(`./json/active_computers.json`);
compActiveStream.write(JSON.stringify(activeComputers));

let deadComputers = generateDeadComputers();
let compDeadStream = createWriteStream(`./json/dead_computers.json`);
compDeadStream.write(JSON.stringify(deadComputers));

let trainingPrograms = generateTrainingPrograms();
let trainingStream = createWriteStream(`./json/training.json`);
trainingStream.write(JSON.stringify(trainingPrograms));
