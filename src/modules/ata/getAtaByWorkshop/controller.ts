import { AtaByWorkshopUseCase } from "./usecase";
import { AtaByWorkshopModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class AtaByWorkshopController implements ControllerInterface<any> {
    constructor(private usecase: AtaByWorkshopUseCase) { }

    async handle(props: AtaByWorkshopModel): Promise<HttpResponseInterface> {
        const ataByWorkshopModel = new AtaByWorkshopModel(props);

        const response = await this.usecase.execute(ataByWorkshopModel);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}