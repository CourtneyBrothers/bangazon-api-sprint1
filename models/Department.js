
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");


module.exports.getAll = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM departments`, (err, dept) => {
      if (err) return reject(err);
      resolve(dept);
    });
  });
};




module.exports.getOne = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM departments WHERE department_id = "${id}"`, (err, dept) => {
      if (err) return reject(err);
      resolve(dept);
    });
  });
};


module.exports.postOne = ({departmentName, supervisorId, budget}) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO departments VALUES(${null},"${departmentName}",${supervisorId},${budget})`, (err, dept) => {
      if (err) return reject(err);
      resolve(dept);
    });
  });
}

module.exports.putOne = ({id},{departmentName,supervisorId,budget}) => {
  console.log("id",{id});
  return new Promise( (resolve, reject) => {
    
    db.run(`UPDATE departments SET department_id = ${id},department_name = "${departmentName}",supervisor_id =${supervisorId}, budget = ${budget} WHERE department_id =${id}`, (err, dept) => {
      if (err) return reject(err);
      resolve(dept);
    });
  });
}
