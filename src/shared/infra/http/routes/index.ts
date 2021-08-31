import { Router } from "express"
import { CreateUserController } from "../../../../modules/user/useCases/createUser/CreateUserController";
import { FindUserController } from "../../../../modules/user/useCases/findUser/FindUserController";

const router = Router();

const createUserController = new CreateUserController()
const findUserController = new FindUserController()

router.post("/create", createUserController.handle)

router.get("/read/:id", findUserController.handle)


export { router }