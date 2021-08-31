import { model } from "mongoose";
import { IUser } from "../../../../modules/user/User";

import { userSchema } from "../schemas/UserSchema";


const userModel = model<IUser>('IUser', userSchema);



export { userModel }
