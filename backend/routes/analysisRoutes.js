const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const analysisController = require('../controllers/analysisController');
const auth = require('../middleware/auth'); // Assume middleware for JWT

router.post('/', auth, upload.single('file'), analysisController.analyze);

module.exports = router;