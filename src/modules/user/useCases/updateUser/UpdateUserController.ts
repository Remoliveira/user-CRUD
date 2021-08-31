import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import { UpdateUserUsecase } from "./UpdateUserUseCase";


class UpdateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { nome, id, nomeUsuario, senha } = request.body;

        const userRepository = UserRepository.getInstance();

        const updateUserUseCase = new UpdateUserUsecase(userRepository);

        try {
            const user = await updateUserUseCase.execute({ nome, id, nomeUsuario, senha })
            
            return response.status(200).json(user);

        }catch(err){

            return response.status(400).json({ message:"Usuario não existe" })
        }


    }

}

export { UpdateUserController }