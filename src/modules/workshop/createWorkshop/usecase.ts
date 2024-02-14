import { CreateWorkshopModel } from './model';
import { ICreateWorkshopInterface } from './interface';

export class CreateWorkshopUseCase {
    constructor(private createWorkshopRepository: ICreateWorkshopInterface) { }

    async execute(props:CreateWorkshopModel): Promise<CreateWorkshopModel> {
        return await this.createWorkshopRepository.createWorkshop(props);
    }
}