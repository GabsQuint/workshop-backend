import { GetAllColaboradoresUsecase } from "./usecase";
import { AllColaboradoresController } from "./controller";
import { AllColaboradoresRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new AllColaboradoresRepository(knexForFast)
const UseCase = new GetAllColaboradoresUsecase(Repository)
const ControllerAllColaboradores = new AllColaboradoresController(UseCase)

export { ControllerAllColaboradores }