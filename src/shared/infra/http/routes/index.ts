import { Router } from "express"
import { CreateUserController } from "../../../../modules/user/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/user/useCases/deleteUser/DeleteUserController";
import { FindUserController } from "../../../../modules/user/useCases/findUser/FindUserController";
import { UpdateUserController } from "../../../../modules/user/useCases/updateUser/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.post("/create", createUserController.handle);

router.get("/read/:id", findUserController.handle);

router.put("/update", updateUserController.handle);

router.delete("/delete/:id", deleteUserController.handle);


export { router }