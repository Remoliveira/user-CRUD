import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementation/UserRepository";
import { FindUserUseCase } from "./FindUserUseCase";


class FindUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const userRepository = UserRepository.getInstance()

        const findUserUseCase = new FindUserUseCase(userRepository)

        const user = await findUserUseCase.execute(id);

        return response.status(200).json({ user });

    }
}

export { FindUserController }