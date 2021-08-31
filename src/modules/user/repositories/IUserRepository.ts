import { IUser } from "../User";


interface IUserRepository {

    criarUsuario({ nome, id, nomeUsuario, senha, ultimoAcesso }:IUser): Promise<IUser>

    atualizarUsuario(): void

    deletarUsuario(): void

    pesquisarUsuario(id: string): Promise<IUser>

}

export { IUserRepository }