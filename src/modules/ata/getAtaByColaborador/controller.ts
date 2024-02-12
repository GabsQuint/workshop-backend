import { AtaByColaboradorUseCase } from "./usecase";
import { AtaByColaboradorModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class AtaByColaboradorController implements ControllerInterface<any> {
    constructor(private usecase: AtaByColaboradorUseCase) { }

    async handle(props: AtaByColaboradorModel): Promise<HttpResponseInterface> {
        const ataByColaboradorModel = new AtaByColaboradorModel(props);

        const response = await this.usecase.execute(ataByColaboradorModel);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}