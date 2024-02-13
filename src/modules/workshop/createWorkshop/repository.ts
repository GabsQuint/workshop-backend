import { ICreateWorkshopModelInterface } from "./interface";
import { CreateWorkshopModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class CreateWorkshopRepository implements ICreateWorkshopModelInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async createWorkshop(props: CreateWorkshopModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();
            const getAta = knex('db_fast.workshops')
            .insert({
                Nome: props.name,
                DataRealizacao: props.dateCompletion,
                Descricao: props.description
            })

            return getAta
        } catch (error) {
            console.log(error);
        }
    }
}