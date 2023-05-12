const { Router } = require('express');
const {
	postLeadHandler,
	getAllLeadHandler,
	updateLeadHandler,
	getLeadByIdHandler,
	getLeadByNameHandler,
} = require('../Handlers/LeadHandlers');
const LeadRouter = Router();

LeadRouter.post('/', postLeadHandler);
LeadRouter.get('/', getAllLeadHandler);
LeadRouter.get('/name', getLeadByNameHandler);
LeadRouter.get('/:id', getLeadByIdHandler);
LeadRouter.put('/:id', updateLeadHandler);

module.exports = LeadRouter;
