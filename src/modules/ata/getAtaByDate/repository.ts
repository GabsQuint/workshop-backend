import { IAtaByDateInterface } from "./interface";
import { AtaByDateModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class AtaByDateRepository implements IAtaByDateInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async getAtaByDate(props: AtaByDateModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const getAta = knex('db_fast.workshops as w')
            .join('db_fast.atas as a', 'w.Id', '=', 'a.WorkshopId')
            .join('db_fast.colaboradores as c', 'a.ColaboradorId', '=', 'c.Id')
            .select('w.Nome as Workshop', 'w.DataRealizacao', 'w.Descricao', 'c.Nome as Colaborador')
            .where('w.DataRealizacao', '=', props.data);

            return getAta
        } catch (error) {
            console.log(error);
        }
    }
}