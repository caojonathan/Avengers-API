const Avenger = require('../models/avenger')

const getAllAvenger = (req, res) =>{
    Avenger.find({}, (err, data)=>{
        if(err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST avenger
const newAvenger = (req, res) => {
    //check if the avenger name already exists in db
    Avenger.findOne({name: req.body.name}, (data) => {

        //if avenger not in db, add it
        if ( data == null ) {
            //create a new avenger object using the avenger model and req.body
            const newAvenger = new Avenger({
                name:req.body.name,
                image: req.body.image, // placeholder for now
                real_name: req.body.real_name,
                powers: req.body.powers,
                abilities: req.body.abilities,
                actor: req.body.actor,
            });

            // save this object to database
            newAvenger.save((err, data)=>{
                if (err) return res.json({Error: err});
                return res.json(data);
            });
        //if there's an error or the avenger is in db, return a message         
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Avenger already accounted for"});
        }
    });    
};



const deleteAllAvenger = (req, res) =>{
    Avenger.deleteMany({}, err =>{
        if(err){
            return res.json({message:"Complete delete failed"});
        }
        return res.json({message: "Complete delete success"});
    })
};

const getOneAvenger = (req, res) =>{
    let name = req.params.name;
    Avenger.findOne({name:name}, (err,data) =>{
        if(err || !data){
            return res.json({message:"Avenger Not Found"});
        }
        else return res.json(data);
    })
};


const deleteOneAvenger = (req, res, next) =>{
    let name = req.params.name;

    Avenger.deleteOne({name:name}, (err,data)=>{
        if(err || !data){
            return res.json({message: "Avenger not found"});
        }
        else return res.json({message:"Avenger Removed"})
    });
}; 

module.exports = {
    getAllAvenger,
    newAvenger,
    deleteAllAvenger,
    getOneAvenger,
    deleteOneAvenger
};