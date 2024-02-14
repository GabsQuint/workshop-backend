import { AddColaboradorModel } from './model';
import { IAddColaboradorInterface } from './interface';

export class AddColaboradorUseCase {
    constructor(private addColaboradorRepository: IAddColaboradorInterface) { }

    async execute(props:AddColaboradorModel): Promise<AddColaboradorModel> {
        return await this.addColaboradorRepository.addColaborador(props);
    }
}