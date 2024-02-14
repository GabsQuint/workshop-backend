import { IDeleteColaboradorInterface } from "./interface";
import { DeleteColaboradorModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class DeleteColaboradorRepository implements IDeleteColaboradorInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async deleteColaborador(props: DeleteColaboradorModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const idColaborador = knex('db_fast.colaborador')
            .whereLike('Nome', props.colaboradorName)
            .select('db_fast.colaborador.Id')


            const deleteColaborador = knex('db_fast.ata_colaborador')
            .where('AtaId', props.ataId)
            .andWhere('ColaboradorId', idColaborador)
            .del();

            return deleteColaborador
        } catch (error) {
            console.log(error);
        }
    }
}