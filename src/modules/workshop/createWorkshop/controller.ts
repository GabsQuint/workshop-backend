import { CreateWorkshopUseCase } from "./usecase";
import { CreateWorkshopModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class CreateWorkshopController implements ControllerInterface<any> {
    constructor(private usecase: CreateWorkshopUseCase) { }

    async handle(props: CreateWorkshopModel): Promise<HttpResponseInterface> {
        const createWorkshop = new CreateWorkshopModel(props);

        const response = await this.usecase.execute(createWorkshop);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}