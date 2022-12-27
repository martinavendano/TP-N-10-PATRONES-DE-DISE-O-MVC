const express = require('express');
const router = express.Router();
const {home,abaut} = require('../controllers/mainController') /* en esta variable se declaran el home y about */

router.get('/',home);
router.get('/about',abaut)

module.exports = router;