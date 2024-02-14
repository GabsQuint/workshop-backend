import { DeleteColaboradorUseCase } from "./usecase";
import { DeleteColaboradorModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class DeleteColaboradorController implements ControllerInterface<any> {
    constructor(private usecase: DeleteColaboradorUseCase) { }

    async handle(props: DeleteColaboradorModel): Promise<HttpResponseInterface> {
        const deleteColaborador = new DeleteColaboradorModel(props);

        const response = await this.usecase.execute(deleteColaborador);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}