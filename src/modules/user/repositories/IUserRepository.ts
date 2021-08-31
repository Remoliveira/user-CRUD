import { IUser } from "../User";


interface IUserRepository {

    criarUsuario({ nome, id, nomeUsuario, senha }:IUser): Promise<IUser>

    atualizarUsuario({ nome, id, nomeUsuario, senha }:IUser): Promise<IUser>

    deletarUsuario(id: string): Promise<void>

    pesquisarUsuario(id: string): Promise<IUser>

}

export { IUserRepository }