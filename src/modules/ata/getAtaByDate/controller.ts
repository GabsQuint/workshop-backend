import { AtaByDateUseCase } from "./usecase";
import { AtaByDateModel } from "./model";
import { ControllerInterface } from "../../../domain/interface/controller.interface";
import { HttpResponseInterface } from "../../../domain/interface/server.interface";

export class AtaByWorkshopController implements ControllerInterface<any> {
    constructor(private usecase: AtaByDateUseCase) { }

    async handle(props: AtaByDateModel): Promise<HttpResponseInterface> {
        const ataByWorkshopModel = new AtaByDateModel(props);

        const response = await this.usecase.execute(ataByWorkshopModel);
        return {
            statusCode: 200,
            response: response,
            message: "Successfully with query"
        }
    }
}