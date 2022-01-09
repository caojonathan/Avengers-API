const express = require('express');
const router = express.Router();
const avengerController = require('../controllers/avenger');

router.get('/avenger', avengerController.getAllAvenger);
router.post('/avenger', avengerController.uploadImg, avengerController.newAvenger);
router.delete('/avenger', avengerController.deleteAllAvenger);

router.get('/avenger/:name', avengerController.getOneAvenger);
router.delete('/avenger/:name', avengerController.deleteOneAvenger);


module.exports = router;