import { CreateColaboradorUseCase } from "./usecase";
import { CreateColaboradorModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class CreateColaboradorController implements ControllerInterface<any> {
    constructor(private usecase: CreateColaboradorUseCase) { }

    async handle(props: CreateColaboradorModel): Promise<HttpResponseInterface> {
        const createWorkshop = new CreateColaboradorModel(props);

        const response = await this.usecase.execute(createWorkshop);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}