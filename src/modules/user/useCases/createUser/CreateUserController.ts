import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementation/UserRepository"
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
   
    async handle(request: Request, response: Response): Promise<Response>{

        const { nome, nomeUsuario, senha, id, ultimoAcesso} = request.body;

        const userRepository = UserRepository.getInstance()

        const createUserUseCase = new CreateUserUseCase(userRepository)
        try{
            const user = createUserUseCase.execute({ nome, nomeUsuario, senha, id, ultimoAcesso});
            return response.status(201).json(user)

        }catch(err){
            return response.status(400).json({message:"Usuario já existente"})
        }
        
    }
    
}

export { CreateUserController }