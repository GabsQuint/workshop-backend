import { AtaByDateModel } from './model';
import { IAtaByDateInterface } from './interface';

export class AtaByDateUseCase {
    constructor(private ataByDateRepository: IAtaByDateInterface) { }

    async execute(props:AtaByDateModel): Promise<AtaByDateModel> {
        return await this.ataByDateRepository.getAtaByDate(props);
    }
}