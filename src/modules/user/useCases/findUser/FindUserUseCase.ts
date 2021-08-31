import { IUserRepository } from "../../repositories/IUserRepository";
import { IUser } from "../../User";

class FindUserUseCase {

    constructor(private userRepository: IUserRepository){}

    async execute(id: string): Promise<IUser> {

        const user = await this.userRepository.pesquisarUsuario(id);
        return user;
    }
}

export { FindUserUseCase }