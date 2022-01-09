const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();
const avengerController = require('../controllers/avenger');

router.get('/avenger', avengerController.getAllAvenger);
router.post('/avenger', upload.none(), avengerController.newAvenger);
router.delete('/avenger', avengerController.deleteAllAvenger);

router.get('/avenger/:name', avengerController.getOneAvenger);
router.post('/avenger/:name', avengerController.newComment);
router.delete('/avenger/:name', avengerController.deleteOneAvenger);



module.exports = router;