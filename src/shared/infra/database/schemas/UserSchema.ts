import { Schema } from "mongoose";
import { IUser } from "../../../../modules/user/User";

const userSchema = new Schema<IUser>({

    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    ultimoAcesso: {
        type: Date,
       
    }

});

export { userSchema }