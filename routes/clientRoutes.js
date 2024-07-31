const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.getAllClients);
router.get('/add', clientController.addClientForm);
router.post('/add', clientController.addClient);
router.get('/edit/:id', clientController.editClientForm);
router.post('/edit/:id', clientController.updateClient);
router.get('/delete/:id', clientController.deleteClient);

module.exports = router;
