import { AllColaboradoresInterface } from "./interface";
import { KnexAdapter } from '../../../infra/adapter/knex.adapter';

export class AllColaboradoresRepository implements AllColaboradoresInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async getAll(): Promise<unknown> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const getAll = await knex('db_fast.colaboradores as c')
            .join('db_fast.atas as a', 'c.Id', '=', 'a.ColaboradorId')
            .join('db_fast.workshops as w', 'a.WorkshopId', '=', 'w.Id')
            .select('c.Nome as Colaborador', 'w.Nome as Workshop', 'w.DataRealizacao', 'w.Descricao')
            .orderBy('c.Nome');

            return getAll
        } catch (error) {
            console.log(error);
        }
    }
}