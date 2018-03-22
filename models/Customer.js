
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");


module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers`, (err, cust) => {
      if (err) return reject(err);
      resolve(cust);
    });
  });
};




module.exports.getOne = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers WHERE customer_id = "${id}"`, (err, cust) => {
      if (err) return reject(err);
      resolve(cust);
    });
  });
};


module.exports.postOne = ({firstName, lastName, addressState, addressStreet, addressZip, addressCity, accountCreationDate}) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO customers VALUES(${null},"${firstName}","${lastName}","${addressStreet}","${addressCity}","${addressState}","${addressZip}","${accountCreationDate}")`, (err, cust) => {
      if (err) return reject(err);
      resolve(cust);
    });
  });
}

module.exports.putOne = ({id},{firstName,lastName,addressState,addressStreet,addressZip,addressCity,accountCreationDate}) => {
  console.log("id",{id});
  return new Promise( (resolve, reject) => {
    
    db.run(`UPDATE customers SET customer_id = ${id},first_name = "${firstName}",last_name ="${lastName}",address_street="${addressStreet}",address_city = "${addressCity}",address_state = "${addressState}",address_zip = "${addressZip}",account_creation_date = "${accountCreationDate}" WHERE customer_id =${id}`, (err, cust) => {
      if (err) return reject(err);
      resolve(cust);
    });
  });
}
