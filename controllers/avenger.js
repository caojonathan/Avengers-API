const Avenger = require('../models/avenger')

const getAllAvenger = (req, res, next) =>{
    res.json({message: "GET All Avengers"});
};

//POST avenger
const newAvenger = (req, res) => {
    //check if the tea name already exists in db
    Avenger.findOne({name: req.body.name}, (data) => {

        //if tea not in db, add it
        if ( data == null ) {
            //create a new tea object using the Tea model and req.body
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
        //if there's an error or the tea is in db, return a message         
        }else{
            if(err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({message:"Tea already exists"});
        }
    });    
};



const deleteAllAvenger = (req, res, next) =>{
    res.json({message: "DELETE All Avenger"});
};

const getOneAvenger = (req, res, next) =>{
    res.json({message: "GET One Avenger"});
};

const newComment = (req, res, next) =>{
    res.json({message: "POST New Comment"});
};

const deleteOneAvenger = (req, res, next) =>{
    res.json({message: "DELETE One Avenger"});
}; 

module.exports = {
    getAllAvenger,
    newAvenger,
    deleteAllAvenger,
    getOneAvenger,
    newComment,
    deleteOneAvenger
};