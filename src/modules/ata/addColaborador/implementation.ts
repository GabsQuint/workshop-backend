import { AddColaboradorUseCase } from "./usecase";
import { AddColaboradorController } from "./controller";
import { AddColaboradorRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new AddColaboradorRepository(knexForFast)
const UseCase = new AddColaboradorUseCase(Repository)
const AddColaborador= new AddColaboradorController(UseCase)

export { AddColaborador }