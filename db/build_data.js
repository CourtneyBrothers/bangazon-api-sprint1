'use strict';

const { createWriteStream } = require('fs');
const { generateCustomers } = require("../data/customers");
const { generateEmployees, generateSupervisors } = require("../data/employees");

// customers data
let customers = generateCustomers();
let custStream = createWriteStream(`./json/customers.json`);
custStream.write(JSON.stringify(customers));


// employee data
let employees = generateEmployees();
let empStream = createWriteStream(`./json/employees.json`);
empStream.write(JSON.stringify(employees));

let supervisors = generateSupervisors();
let supStream = createWriteStream(`./json/supervisors.json`);
supStream.write(JSON.stringify(supervisors));
