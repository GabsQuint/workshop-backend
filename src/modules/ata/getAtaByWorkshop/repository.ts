import { IAtaByWorkshopInterface } from "./interface";
import { AtaByWorkshopModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class AtaByWorkshopRepository implements IAtaByWorkshopInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async getAtaByWorkshop(props: AtaByWorkshopModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();

            if(props.workshopNome) {
                const getAta = knex('db_fast.workshop as W')
                .join('db_fast.ata as A', 'W.Id', 'A.WorkshopId')
                .join('db_fast.ata_Colaborador as AC', 'A.Id', 'AC.AtaId')
                .join('db_fast.colaborador as C', 'AC.ColaboradorId', 'C.Id')
                .select([
                    'A.Id AS AtaId',
                    'W.DataRealizacao as DataRealizacaoWorkshop',
                    'W.Descricao as DescricaoWorkshop',
                    'W.Nome as WorkshopNome',
                    'C.Nome as ColaboradorNome',
                ])
                .where(knex.raw('lower(W.Nome)'), 'like', `%${props.workshopNome.toLowerCase()}%`);
    
                return getAta
            } else {
                const getAtaWithoutData = knex('db_fast.ata as A')
                .join('db_fast.workshop as W', 'A.WorkshopId', 'W.Id')
                .join('db_fast.ata_Colaborador as AC', 'A.Id', 'AC.AtaId')
                .join('db_fast.colaborador as C', 'AC.ColaboradorId', 'C.Id')
                .select([
                    'A.Id AS AtaId',
                    'W.DataRealizacao as DataRealizacaoWorkshop',
                    'W.Descricao as DescricaoWorkshop',
                    'W.Nome AS WorkshopNome',
                    'C.Nome AS ColaboradorNome'
                ])

                return getAtaWithoutData
            }
    

            
        } catch (error) {
            console.log(error);
        }
    }
}