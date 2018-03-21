'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite');
const { readFileSync } = require('fs');

const empData = JSON.parse(readFileSync("./json/employees.json"));
const compActiveData = JSON.parse(readFileSync("./json/active_computers.json"));
const compDeadData = JSON.parse(readFileSync("./json/dead_computers.json"));
const trainingData = JSON.parse(readFileSync("./json/training.json"));

const custData = JSON.parse(readFileSync("./json/customers.json"));
const prodData = JSON.parse(readFileSync("./data/product_types.json"));
const payData = JSON.parse(readFileSync("./json/payment_types.json"));


db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS customers`);
    db.run(
        `CREATE TABLE IF NOT EXISTS customers (
    customer_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    address_street TEXT,
    address_city TEXT,
    address_state TEXT,
    address_zip TEXT,
    account_creation_date TEXT
    )`,
        () => {
            custData.forEach(({ firstName, lastName, addressStreet, addressCity, addressState, addressZip, accountCreationDate }) => {
                db.run(`INSERT INTO customers VALUES (
        ${null},
        "${firstName}",
        "${lastName}",
        "${addressStreet}",
        "${addressCity}",
        "${addressState}",
        "${addressZip}",
        "${accountCreationDate}"
        )`);
            });
        }
    );
    db.run(`DROP TABLE IF EXISTS product_types`)
    db.run(
        `CREATE TABLE IF NOT EXISTS product_types (
            product_type_id INTEGER PRIMARY KEY,
            product_type_name TEXT
        )`,
            () => {
                prodData.productTypes.forEach(({ product_type, product_id}) => {
                    db.run(`INSERT INTO product_types VALUES(
                        ${product_id},
                        "${product_type}"
                    )`);
            });
    });
    db.run(`DROP TABLE IF EXISTS payment_types`)
    db.run(
        `CREATE TABLE IF NOT EXISTS payment_types (
            payment_id INTEGER PRIMARY KEY,
            customer_id INTEGER,
            payment_option TEXT,
            account_number INTEGER
        )`,
        () => {
            payData.forEach(({ customerId, paymentOption, accountNumber }) => {
                db.run(`INSERT INTO payment_types VALUES(
                        ${null},
                        ${customerId},
                        "${paymentOption}",
                        ${accountNumber}
                    )`);
        });
    });
});


db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS employees`);
    db.run(
        `CREATE TABLE IF NOT EXISTS employees (
    employee_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    dept_id INTEGER,
    )`,
        () => {
            empData.forEach(({ firstName, lastName, deptId, posId }) => {
                db.run(`INSERT INTO employees VALUES (
                ${null},
                "${firstName}",
                "${lastName}",
                ${deptId}
                )`);
            });
        }
    );
    db.run(`DROP TABLE IF EXISTS computers`);
    db.run(`CREATE TABLE IF NOT EXISTS computers (
        computer_id INTEGER PRIMARY KEY,
        purchase_date TEXT,
        decommission_date TEXT
    )`,
        ()=>{
            compActiveData.forEach(({purchaseDate})=>{
                db.run(`INSERT INTO computers VALUES(${null}, "${purchaseDate}", null)`)
            });
            compDeadData.forEach(({ purchaseDate, decommissionDate }) => {
                db.run(`INSERT INTO computers VALUES(${null}, "${purchaseDate}", "${decommissionDate}")`)
            });
        }
    );
    db.run(`DROP TABLE IF EXISTS training_programs`);
    db.run(`CREATE TABLE IF NOT EXISTS training_programs (
        program_id INTEGER PRIMARY KEY,
        program_title TEXT,
        start_date TEXT,
        end_date TEXT,
        max_attendees INTEGER
    )`,
        ()=>{
            trainingData.forEach(({programTitle,startDate,endDate,maxAttendees})=>{
               db.run(`INSERT INTO training_programs VALUES(
                   ${null},
                   "${programTitle}",
                   "${startDate}",
                   "${endDate}",
                   ${maxAttendees}
               )`);
            });
        }
    );
});