import { userModel } from "../../../../shared/infra/database/models/UserModel";
import { IUser } from "../../User";
import { IUserRepository } from "../IUserRepository";


class UserRepository implements IUserRepository {

    private static instance: UserRepository;
    static UserRepository: UserRepository;
   
    private constructor(){}

    public static getInstance(): UserRepository{
        if(!UserRepository.instance){
            UserRepository.instance = new UserRepository();
        }

        return UserRepository.instance;
    }

    async criarUsuario({ nome, id, nomeUsuario, senha, ultimoAcesso }: IUser): Promise<IUser> {
        
        const user = new userModel({ nome, id, nomeUsuario, senha, ultimoAcesso });

        await user.save()

        return user;      
    }


    atualizarUsuario(): void {
        throw new Error("Method not implemented.");
    }
    deletarUsuario(): void {
        throw new Error("Method not implemented.");
    }
    async pesquisarUsuario(idSearch: string): Promise<IUser> {
        
        const user = await userModel.findOne({ id: idSearch })

        return user;    
    }

    

}


export { UserRepository }