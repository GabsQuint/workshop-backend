import { DeleteColaboradorModel } from './model';
import { IDeleteColaboradorInterface } from './interface';

export class DeleteColaboradorUseCase {
    constructor(private deleteColaboradorRepository: IDeleteColaboradorInterface) { }

    async execute(props:DeleteColaboradorModel): Promise<DeleteColaboradorModel> {
        return await this.deleteColaboradorRepository.deleteColaborador(props);
    }
}