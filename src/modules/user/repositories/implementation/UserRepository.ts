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

    async criarUsuario({ nome, id, nomeUsuario, senha }: IUser): Promise<IUser> {
        
        const user = new userModel({ nome, id, nomeUsuario, senha });
        user.ultimoAcesso = new Date()
        await user.save()

        return user;      
    }


    async atualizarUsuario({ nome, id, nomeUsuario, senha }: IUser): Promise<IUser> {

        const user = await userModel.findOne({ id: id })
        user.nome = nome;
        user.nomeUsuario = nomeUsuario;
        user.senha = senha;
        user.ultimoAcesso = new Date()
        await user.save()
        
        return user;
    }

    async deletarUsuario(id: string): Promise<void> {
        
        await userModel.deleteOne({ id: id })
    }


    async pesquisarUsuario(idSearch: string): Promise<IUser> {
        
        const user = await userModel.findOne({ id: idSearch })

        return user;    
    }

    

}


export { UserRepository }