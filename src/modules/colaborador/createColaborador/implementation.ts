import { CreateColaboradorUseCase } from "./usecase";
import { CreateColaboradorController } from "./controller";
import { CreateColaboradorRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new CreateColaboradorRepository(knexForFast)
const UseCase = new CreateColaboradorUseCase(Repository)
const CreateColaborador= new CreateColaboradorController(UseCase)

export { CreateColaborador }