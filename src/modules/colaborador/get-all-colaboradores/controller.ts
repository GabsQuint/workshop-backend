import { GetAllColaboradoresUsecase } from "./usecase";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class AllColaboradoresController implements ControllerInterface<any> {
    constructor(private usecase: GetAllColaboradoresUsecase) {}

    async handle(): Promise<HttpResponseInterface> {
        try {
            const response = await this.usecase.execute();

            return {
                statusCode: 200,
                response: response,
                message: `Success test`
            }
        } catch (error) {
            return {
                statusCode: 500,
                response: error,
            }
        }
    }
}