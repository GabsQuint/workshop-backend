import { CreateWorkshopModel } from './model';
import { ICreateWorkshopInterface } from './interface';

export class CreateWorkshopUseCase {
    constructor(private ataByDateRepository: ICreateWorkshopInterface) { }

    async execute(props:CreateWorkshopModel): Promise<CreateWorkshopModel> {
        return await this.ataByDateRepository.createWorkshop(props);
    }
}