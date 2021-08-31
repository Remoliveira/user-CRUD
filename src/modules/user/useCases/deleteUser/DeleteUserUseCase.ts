import { IUserRepository } from "../../repositories/IUserRepository";


class DeleteUserUseCase {

    constructor(private userRepository: IUserRepository){}

    async execute(id: string): Promise<void>{

        const user = await this.userRepository.pesquisarUsuario(id)

        if(!user){
            throw new Error("Usuario não existe");
        }

        await this.userRepository.deletarUsuario(id)
    }
}

export { DeleteUserUseCase }