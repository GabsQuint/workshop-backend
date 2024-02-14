import { ICreateAtaInterface } from "./interface";
import { CreateAtaModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class CreateAtaRepository implements ICreateAtaInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async createAta(props: CreateAtaModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const getAta = knex('db_fast.ata')
            .insert({
                WorkshopId: props.workshopId
            })

            return getAta
        } catch (error) {
            console.log(error);
        }
    }
}