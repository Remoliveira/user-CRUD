import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


class DeleteUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const userRepository = UserRepository.getInstance();

        const deleteUserUseCase = new DeleteUserUseCase(userRepository);
        try{
            await deleteUserUseCase.execute(id);

            return response.status(200);

        }catch(err){
            return response.status(400).json(err)
        } 
    }

}

export { DeleteUserController }