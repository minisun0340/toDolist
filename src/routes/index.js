'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./ctrl');

//get
router.get('/', ctrl.output.home);


//post

module.exports = router;
