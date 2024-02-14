import { AddColaboradorUseCase } from "./usecase";
import { AddColaboradorModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class AddColaboradorController implements ControllerInterface<any> {
    constructor(private usecase: AddColaboradorUseCase) { }

    async handle(props: AddColaboradorModel): Promise<HttpResponseInterface> {
        const addColaborador = new AddColaboradorModel(props);

        const response = await this.usecase.execute(addColaborador);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}