import { CreateAtaModel } from './model';
import { ICreateAtaInterface } from './interface';

export class CreateAtaUseCase {
    constructor(private createAtaRepository: ICreateAtaInterface) { }

    async execute(props:CreateAtaModel): Promise<CreateAtaModel> {
        return await this.createAtaRepository.createAta(props);
    }
}