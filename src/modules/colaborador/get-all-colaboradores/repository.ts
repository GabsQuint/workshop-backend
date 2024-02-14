import { AllColaboradoresInterface } from "./interface";
import { KnexAdapter } from '../../../infra/adapter/knex.adapter';

export class AllColaboradoresRepository implements AllColaboradoresInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async getAll(): Promise<unknown> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const getAll = await knex('db_fast.colaborador as C')
            .leftJoin('db_fast.ata_colaborador as AC', 'C.Id', 'AC.ColaboradorId')
            .leftJoin('db_fast.ata as A', 'AC.AtaId', 'A.Id')
            .leftJoin('db_fast.workshop as W', 'A.WorkshopId', 'W.Id')
            .select([
                'C.Nome as ColaboradorNome',
                'W.Nome as WorkshopNome',
                'W.DataRealizacao as DataRealizacaoWorkshop',
                'W.Descricao as DescricaoWorkshop'
            ])
            .orderBy('C.Nome');

            return getAll
        } catch (error) {
            console.log(error);
        }
    }
}