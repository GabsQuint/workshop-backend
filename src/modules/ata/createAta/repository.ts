import { ICreateAtaInterface } from "./interface";
import { CreateAtaModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class CreateAtaRepository implements ICreateAtaInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async createAta(props: CreateAtaModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const idWorkshop = knex('db_fast.workshop')
            .whereLike('Nome', props.workshopName)
            .select('db_fast.workshop.Id')


            const createAta = knex('db_fast.ata')
            .insert({
                WorkshopId: idWorkshop
            })

            return createAta
        } catch (error) {
            console.log(error);
        }
    }
}