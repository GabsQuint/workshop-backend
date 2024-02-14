import { CreateAtaUseCase } from "./usecase";
import { CreateAtaModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class CreateAtaController implements ControllerInterface<any> {
    constructor(private usecase: CreateAtaUseCase) { }

    async handle(props: CreateAtaModel): Promise<HttpResponseInterface> {
        const createAta = new CreateAtaModel(props);

        const response = await this.usecase.execute(createAta);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}