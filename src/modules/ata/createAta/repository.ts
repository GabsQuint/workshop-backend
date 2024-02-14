import { ICreateAtaInterface } from "./interface";
import { CreateAtaModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class CreateAtaRepository implements ICreateAtaInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async createAta(props: CreateAtaModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const createAta = knex('db_fast.ata')
            .insert({
                WorkshopId: props.workshopId
            })

            return createAta
        } catch (error) {
            console.log(error);
        }
    }
}