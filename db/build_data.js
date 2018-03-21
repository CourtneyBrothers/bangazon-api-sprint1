'use strict';

const { createWriteStream } = require('fs');
const { generateCustomers } = require("../data/customers");
const { generateEmployees } = require("../data/employees");

let customers = generateCustomers();
let custStream = createWriteStream(`customers.json`);
custStream.write(JSON.stringify(customers));