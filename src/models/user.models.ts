import {model, Schema, Document} from "mongoose";

export interface UserInterface extends Document {
    name: string;
    email: string;
}

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type : String,
            required: true,
        }

    }
)

const User = model<UserInterface>('User',userSchema);


export default User;