import { CreateAtaUseCase } from "./usecase";
import { CreateAtaController } from "./controller";
import { CreateAtaRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new CreateAtaRepository(knexForFast)
const UseCase = new CreateAtaUseCase(Repository)
const CreateAta= new CreateAtaController(UseCase)

export { CreateAta }