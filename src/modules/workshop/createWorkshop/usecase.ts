import { CreateWorkshopModel } from './model';
import { ICreateWorkshopModelInterface } from './interface';

export class CreateWorkshopUseCase {
    constructor(private ataByDateRepository: ICreateWorkshopModelInterface) { }

    async execute(props:CreateWorkshopModel): Promise<CreateWorkshopModel> {
        return await this.ataByDateRepository.createWorkshop(props);
    }
}