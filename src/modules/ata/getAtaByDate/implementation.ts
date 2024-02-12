import { AtaByDateUseCase } from "./usecase";
import { AtaByWorkshopController } from "./controller";
import { AtaByDateRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new AtaByDateRepository(knexForFast)
const UseCase = new AtaByDateUseCase(Repository)
const ControllerAllAtasByDate= new AtaByWorkshopController(UseCase)

export { ControllerAllAtasByDate }