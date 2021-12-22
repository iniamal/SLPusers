import  mongoose  from "mongoose"
import usersModel from "../models/usersModel.js" 



export const getProfile = async (req, res) => { 
    const {id} = req.params;

    try {
        const post = await usersModel.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        // res.status(404).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) => {
    
    const {id: _id} = req.params
    const post = req.body
   
        if(!mongoose.Types.ObjectId.isValid(_id)
    
        ) return res.status(404).send("No Profil")
        
        const updateProfile = await usersModel.findByIdAndUpdate(_id, {...post, _id, avatar: req.secure_url}, {new: true})
    
        res.json(updateProfile)
}
    
    

