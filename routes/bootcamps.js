const express = require('express');

//Import routes from controller directory
const{ getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp } =require('../controllers/bootcamps')
const router = express.Router();

//attach the imported methods to the router
router
.route('/')
.get(getBootcamps)
.post(createBootcamp);

router
.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);


module.exports = router;