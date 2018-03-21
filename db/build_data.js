'use strict';

const { createWriteStream } = require('fs');
const { generateCustomers } = require("../data/customers");
const { generatePaymentTypes } = require("../data/payment_types");
const { generateEmployees, generateSupervisors } = require("../data/employees");

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
