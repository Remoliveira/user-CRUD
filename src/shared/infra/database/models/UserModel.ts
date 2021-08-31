import { model } from "mongoose";
import { IUser } from "../../../../modules/user/User";

import { userSchema } from "../schemas/UserSchema";


const userModel = model<IUser>('Usuario', userSchema);



export { userModel }
