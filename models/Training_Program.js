const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./bangazon.sqlite");

module.exports.getAll = () => {
    return new Promise( (resolve, reject) => {
        db.all(
        `SELECT *
        FROM training_programs`,
        (err, trainingPrograms) => {
            if (err) return reject(err);
            resolve(trainingPrograms);
            }
        );
    });
}

module.exports.getOne = (id) => {
    return new Promise( (resolve, reject) => {
        db.get(
        `SELECT *
        FROM training_programs
        WHERE training_programs.program_id = ${id}`,
        (err, trainingProgram) => {
            if(err) return reject(err);
            resolve(trainingProgram);
            }
        );
    });
}

module.exports.postOne = ({ program_title, start_date, end_date, max_attendees }) => {
    
}