const { Router } = require('express');
const trainProgramRouter = Router();
const { getAllTrainingPrograms, getOneTrainingProgram, postOneTrainingProgram, putOneTrainingProgram, deleteOneTrainingProgram } = require('../controllers/trainingProgramCtrl.js'); 

trainProgramRouter.get('/training_programs', getAllTrainingPrograms);
trainProgramRouter.get('/training_programs/:id', getOneTrainingProgram);
trainProgramRouter.post('/training_programs', postOneTrainingProgram);
trainProgramRouter.put('/training_programs', putOneTrainingProgram);
trainProgramRouter.delete('/training_programs/:id', deleteOneTrainingProgram);

module.exports = trainProgramRouter;