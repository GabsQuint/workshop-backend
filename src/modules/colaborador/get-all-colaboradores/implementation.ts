import { GetAllColaboradoresUsecase } from "./usecase";
import { AllColaboradoresController } from "./controller";
import { AllColaboradoresRepository } from "./repository";

const Repository = new AllColaboradoresRepository()
const UseCase = new GetAllColaboradoresUsecase(Repository)
const ControllerAllColaboradores = new AllColaboradoresController(UseCase)

export { ControllerAllColaboradores }