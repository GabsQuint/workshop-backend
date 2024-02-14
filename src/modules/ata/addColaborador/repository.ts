import { IAddColaboradorInterface } from "./interface";
import { AddColaboradorModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class AddColaboradorRepository implements IAddColaboradorInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async addColaborador(props: AddColaboradorModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const addColaborador = knex('db_fast.ata_colaborador')
            .insert({
                AtaId: props.ataId,
                ColaboradorId: props.colaboradorId
            })

            return addColaborador
        } catch (error) {
            console.log(error);
        }
    }
}