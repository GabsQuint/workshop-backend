import { CreateWorkshopUseCase } from "./usecase";
import { CreateWorkshopController } from "./controller";
import { CreateWorkshopRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new CreateWorkshopRepository(knexForFast)
const UseCase = new CreateWorkshopUseCase(Repository)
const CreateWorkshop= new CreateWorkshopController(UseCase)

export { CreateWorkshop }