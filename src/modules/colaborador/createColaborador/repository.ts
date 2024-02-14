import { ICreateColaboradorInterface } from "./interface";
import { CreateColaboradorModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class CreateColaboradorRepository implements ICreateColaboradorInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async createWorkshop(props: CreateColaboradorModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const getAta = knex('db_fast.colaborador')
            .insert({
                Nome: props.name
            })

            return getAta
        } catch (error) {
            console.log(error);
        }
    }
}