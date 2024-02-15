import { IAtaByDateInterface } from "./interface";
import { AtaByDateModel } from "./model";
import { KnexAdapter } from "../../../infra/adapter/knex.adapter";

export class AtaByDateRepository implements IAtaByDateInterface {
    constructor(private knexAdapter: KnexAdapter) { }

    async getAtaByDate(props: AtaByDateModel): Promise<any> {
        try {
            const knex = this.knexAdapter.getKnexInstance();

            if (props.data) {
                const getAta = knex('db_fast.workshop as W')
                    .join('db_fast.ata as A', 'W.Id', 'A.WorkshopId')
                    .join('db_fast.ata_Colaborador as AC', 'A.Id', 'AC.AtaId')
                    .join('db_fast.colaborador as C', 'AC.ColaboradorId', 'C.Id')
                    .select([
                        'A.Id AS AtaId',
                        'W.DataRealizacao as DataRealizacaoWorkshop',
                        'W.Descricao as DescricaoWorkshop',
                        'W.Nome as WorkshopNome',
                        'C.Nome as ColaboradorNome'
                    ])
                    .where('W.DataRealizacao', props.data);

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