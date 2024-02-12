import { AllColaboradoresInterface } from "./interface";

export class GetAllColaboradoresUsecase {
    constructor(private repository: AllColaboradoresInterface) {}

    async execute(): Promise<unknown> {
        return await this.repository.getAll();
    }
}