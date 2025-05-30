const express = require('express');
const router = express.Router();
const { checkVehicle, calculatePayment } = require('../controllers/parkingController');
const authMiddleware = require('../middlewares/auth');

router.post('/entry', authMiddleware, checkVehicle);
router.post('/exit', authMiddleware, calculatePayment);

module.exports = router;