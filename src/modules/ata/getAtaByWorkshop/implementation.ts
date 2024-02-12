import { AtaByWorkshopUseCase } from "./usecase";
import { AtaByWorkshopController } from "./controller";
import { AtaByWorkshopRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new AtaByWorkshopRepository(knexForFast)
const UseCase = new AtaByWorkshopUseCase(Repository)
const ControllerAllAtas= new AtaByWorkshopController(UseCase)

export { ControllerAllAtas }