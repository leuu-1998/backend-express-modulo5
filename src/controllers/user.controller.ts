import { Request, Response} from 'express';
import User from '../models/user.models';

//function to show all the users already register in the front
export async function list(req: Request, res: Response):Promise<void> {
    try{
        //all we need to list the users
        const users = await User.find({});
        res.status(200).json(users);
    } catch(e){
        console.log("error",e);
        res.status(404).json({message: "We cannot show the users"});
    }
}


//function to create a new user in the database
export async function createUser(req: Request, res: Response):Promise<void> {
    try{
        const {name, email} = req.body;
        //all we need to create the user
        await User.create({name: name, email: email});
        res.status(200).json({message:"User was succesfully created"});
    } catch(e){
        console.log("error",e);
        res.status(404).json({message: "We cannot create the user"});
    }
}

//function to delete a user in the list
export async function deleteUser(req: Request, res: Response): Promise<void>{
    try{
        const {_id} = req.body;
        await User.findByIdAndRemove(_id);
        res.status(200).json({message:"User was succesfully delete"});
    }catch(e){
        console.log("error",e);
        res.status(404).json({message: "We cannot delete the user"});
    }
}