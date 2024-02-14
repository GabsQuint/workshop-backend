import { DeleteColaboradorUseCase } from "./usecase";
import { DeleteColaboradorController } from "./controller";
import { DeleteColaboradorRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new DeleteColaboradorRepository(knexForFast)
const UseCase = new DeleteColaboradorUseCase(Repository)
const DeleteColaborador= new DeleteColaboradorController(UseCase)

export { DeleteColaborador }