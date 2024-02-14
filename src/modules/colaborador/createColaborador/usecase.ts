import { CreateColaboradorModel } from './model';
import { ICreateColaboradorInterface } from './interface';

export class CreateColaboradorUseCase {
    constructor(private createColaboradorRepository: ICreateColaboradorInterface) { }

    async execute(props:CreateColaboradorModel): Promise<CreateColaboradorModel> {
        return await this.createColaboradorRepository.createWorkshop(props);
    }
}