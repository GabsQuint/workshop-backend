import { IAtaByColaboradorInterface } from "./interface";
import { AtaByColaboradorModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class AtaByColaboradorRepository implements IAtaByColaboradorInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async getAtaByColaborador(props: AtaByColaboradorModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const getAta = knex('db_fast.workshops as w')
            .join('db_fast.atas as a', 'w.Id', '=', 'a.WorkshopId')
            .join('db_fast.colaboradores as c', 'a.ColaboradorId', '=', 'c.Id')
            .select('w.Nome as Workshop', 'w.DataRealizacao', 'w.Descricao', 'c.Nome as Colaborador')
            .where('w.Nome', '=', props.workshopNome);

            return getAta
        } catch (error) {
            console.log(error);
        }
    }
}