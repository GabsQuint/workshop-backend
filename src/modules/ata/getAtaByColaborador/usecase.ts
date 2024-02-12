import { AtaByColaboradorModel } from './model';
import { IAtaByColaboradorInterface } from './interface';

export class AtaByColaboradorUseCase {
    constructor(private ataByColaboradorRepository: IAtaByColaboradorInterface) { }

    async execute(props:AtaByColaboradorModel): Promise<AtaByColaboradorModel> {
        return await this.ataByColaboradorRepository.getAtaByColaborador(props);
    }
}