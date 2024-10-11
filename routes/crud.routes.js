const express = require('express');
const { getCrudItems, getCrudItem, createCrudItem, updateCrudItem, deleteCrudItem } = require('../controllers/crud.controller');
const router = express.Router();


router.get('/', getCrudItems);

router.get('/:id', getCrudItem);

router.post('/', createCrudItem);

router.put('/:id', updateCrudItem);

router.delete('/:id', deleteCrudItem);

module.exports = router;