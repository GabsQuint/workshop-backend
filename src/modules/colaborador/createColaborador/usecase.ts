import { CreateColaboradorModel } from './model';
import { ICreateColaboradorInterface } from './interface';

export class CreateColaboradorUseCase {
    constructor(private ataByDateRepository: ICreateColaboradorInterface) { }

    async execute(props:CreateColaboradorModel): Promise<CreateColaboradorModel> {
        return await this.ataByDateRepository.createWorkshop(props);
    }
}