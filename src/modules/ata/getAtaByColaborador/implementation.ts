import { AtaByColaboradorUseCase } from "./usecase";
import { AtaByColaboradorController } from "./controller";
import { AtaByColaboradorRepository } from "./repository";
import { knexForFast } from '../../../infra/database/connection.database';

const Repository = new AtaByColaboradorRepository(knexForFast)
const UseCase = new AtaByColaboradorUseCase(Repository)
const ControllerAllAtas= new AtaByColaboradorController(UseCase)

export { ControllerAllAtas }