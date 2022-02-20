//Import Schemas
const Bootcamp = require('../models/Bootcamp')
//Create Routes

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({success: true, count: bootcamps.length, data: bootcamps})
    } catch (error) {
        res.status(400).json({success: false})
    }
}

//@desc     Get specific bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        
        if(!bootcamp){
           return res.status.json(400)({success: false})
        }

        res.status(200).json({success: true, data: bootcamp})
    } catch (error) {
        res.status(400).json({success: false})
    }
}

//@desc     Get all bootcamps
//@route    POST /api/v1/bootcamps
//@access   Private

//This is the response to API call
exports.createBootcamp = async (req, res, next) => {
    try {
            //bootcamp takes in the user data runs it through the Bootcamp schema, creating an entity with the data
    const bootcamp = await Bootcamp.create(req.body)

    //The response from the call is the status code, and data which is the contents of the newly created bootcamp entity
    res.status(201).json({
        success: true,
        data: bootcamp
    })
    } catch (error) {
      res.status(400).json({success: false})
    }

}

//@desc     Update bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private


exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true
        });
    
        if(!bootcamp){
            return res.status.json(400)({success: false})
         }
    
         res.status(200).json({success: true, data: bootcamp})
    } catch (error) {
        return res.status.json(400)({success: false})
    }

}

//@desc     Delete bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp){
            return res.status.json(400)({success: false})
         }
    
         res.status(200).json({success: true, data: {}})
    } catch (error) {
        return res.status.json(400)({success: false})
    }
}