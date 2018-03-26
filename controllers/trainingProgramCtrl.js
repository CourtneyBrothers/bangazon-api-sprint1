const { getAll, getOne, postOne, putOne, deleteOne } = require('../models/Training_Program');

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

module.exports.postOneTrainingProgram = (req, res, next) => {
    postOne(req.body)
    .then( (trainingProgram) => {
        res.status(200).json(trainingProgram);
    })
    .catch( (err) => next(err));
};

module.exports.putOneTrainingProgram = (req, res, next) => {
    let trainingProgramId = req.params.id;
    putOne(trainingProgramId, req.body)
    .then( (trainingProgram) => {
        res.status(200).json(trainingProgram);
    })
    .catch( (err) => next(err));
}

// This function checks the start date of the requested trainging program, then compares it to today's date to verify if the training start date is in the future.
module.exports.deleteOneTrainingProgram = (req, res, next) => {
    let trainingProgramId = req.params.id;
    getOne(trainingProgramId)
    .then( (trainingProgram) => {
        let trainStartDate = +trainingProgram.start_date.replace(/-/g, "");
        let newDate = new Date().toISOString().split('T')[0];
        let todaysDate = +newDate.replace(/-/g, "");
        if (trainStartDate > todaysDate) {
            deleteOne(trainingProgramId)
            .then( (trainingProgram) => {
                res.status(200).json(trainingProgram);
            })
            .catch((err) => next(err));
        } else {
            let error = new Error("This training program cannot be deleted, it's start date is not in the future");
            error.status = 405;
            next(error);
        }
    });
}
