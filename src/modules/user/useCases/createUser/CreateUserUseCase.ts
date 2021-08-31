import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../User";


class CreateUserUseCase {

    constructor(private userRepository: IUserRepository){}

    async execute({ nome, id, nomeUsuario, senha, ultimoAcesso }: IUser): Promise<IUser>{

        const usarioJaExiste = await this.userRepository.pesquisarUsuario(id);

        if(usarioJaExiste){
            throw new Error("Usuario já existente")
        }

        const user = await this.userRepository.criarUsuario({ nome, id, nomeUsuario, senha, ultimoAcesso });

        return user;

    }

}

export { CreateUserUseCase }