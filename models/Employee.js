
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");


module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM employees`, (err, emp) => {
      if (err) return reject(err);
      resolve(emp);
    });
  });
};




module.exports.getOne = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM employees WHERE employee_id = ${id}`, (err, emp) => {
      if (err) return reject(err);
      resolve(emp);
    });
  });
};


module.exports.postOne = ({firstName, lastName, deptId}) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO employees VALUES(${null},"${firstName}","${lastName}",${deptId})`, (err, emp) => {
      if (err) return reject(err);
      resolve(emp);
    });
  });
}

module.exports.putOne = ({id},{firstName,lastName,deptId}) => {
  console.log("id",{id});
  return new Promise( (resolve, reject) => {
    
    db.run(`UPDATE employees SET employee_id = ${id},first_name = "${firstName}",last_name ="${lastName}",dept_id=${deptId} WHERE employee_id =${id}`, (err, emp) => {
      if (err) return reject(err);
      resolve(emp);
    });
  });
}
