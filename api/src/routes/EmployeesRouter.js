const { Router } = require('express');
const { postEmployeesHandler } = require('../Handlers/employees');
const EmployeesRouter = Router();

EmployeesRouter.post('/', postEmployeesHandler);

module.exports = EmployeesRouter;
