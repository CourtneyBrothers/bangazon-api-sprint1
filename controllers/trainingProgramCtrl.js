const { getAll, getOne, postOne, putOne } = require('../models/Training_Program');

module.exports.getAllTrainingPrograms = (req, res, next) => {
    getAll()
    .then( (trainingPrograms) => {
        res.status(200).json(trainingPrograms)
    })
    .catch( (err) => next(err));
};


module.exports.getOneTrainingProgram = (req, res, next) => {
    let trainingProgramId = req.params.id;
    getOne(trainingProgramId)
    .then( (trainingProgram) => {
        res.status(200).json(trainingProgram);
    })
    .catch( (err) => next(err));
};
