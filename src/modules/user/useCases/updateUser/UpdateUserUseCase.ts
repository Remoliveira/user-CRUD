import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../User";


class UpdateUserUsecase {

    constructor(private userRepository: IUserRepository){}

    async execute({ nome, id, nomeUsuario, senha }: IUser): Promise<IUser> {

        const userExiste = await this.userRepository.pesquisarUsuario(id);

        if(!userExiste) {
            throw new Error("Usuario não existente")
        }

        const user = await this.userRepository.atualizarUsuario({ nome, id, nomeUsuario, senha });

        return user;

    }
}

export { UpdateUserUsecase }