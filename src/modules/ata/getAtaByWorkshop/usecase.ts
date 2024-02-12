import { AtaByWorkshopModel } from './model';
import { IAtaByWorkshopInterface } from './interface';

export class AtaByWorkshopUseCase {
    constructor(private ataByWorkshopRepository: IAtaByWorkshopInterface) { }

    async execute(props:AtaByWorkshopModel): Promise<AtaByWorkshopModel> {
        return await this.ataByWorkshopRepository.getAtaByWorkshop(props);
    }
}